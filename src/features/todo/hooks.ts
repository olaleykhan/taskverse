import { useEffect, useState } from 'react';
import { DraftTodo, Todo } from '@/lib/types/todo';
import { usePusher, PusherChannels, PusherEvents } from '@/lib/pusher';
import { generateTemporaryId } from "@/lib/utils/id";

export const useTodoList = (userId: string) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const pusherClient = usePusher({
    userId,
    channelName: PusherChannels.TodoChannel,
  });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todos');
        const result: Todo[] = await response.json();
        setTodos(result);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    if (pusherClient) {
      const channel = pusherClient.subscribe(PusherChannels.TodoChannel);

      channel.bind(PusherEvents.SubscriptionSucceeded, () => {
        console.log("Subscription succeeded");
      });

      channel.bind(PusherEvents.SubscriptionError, (status: unknown) => {
        console.log("Subscription error:", status);
      });

      channel.bind(PusherEvents.Add, (data: Todo) => {
        setTodos((prev) => [...prev, data]);
      });

      channel.bind(
        PusherEvents.Mark,
        (data: { id: string; isDone: boolean; markedBy: string }) => {
          setTodos((prev) =>
            prev.map((todo) =>
              todo.id === data.id
                ? { ...todo, isDone: data.isDone, markedBy: data.markedBy }
                : todo
            )
          );
        }
      );

      channel.bind(PusherEvents.Delete, (data: { id: string }) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== data.id));
      });

      return () => {
        channel.unbind_all();
        pusherClient.unsubscribe(PusherChannels.TodoChannel);
      };
    }
  }, [pusherClient]);

  const addTodo = async (content: string) => {
    const newTask: DraftTodo = {
      content,
      isDone: false,
      createdBy: userId,
    };
    await fetch("/api/todos/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
  };

  const toggleTodoDone = async (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      await fetch("/api/todos/mark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, isDone: !todo.isDone, markedBy: userId }),
      });
    }
  };

  const deleteTodo = async (id: string) => {
    await fetch("/api/todos/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  };

  return {
    todos,
    addTodo,
    toggleTodoDone,
    deleteTodo,
  };
};
