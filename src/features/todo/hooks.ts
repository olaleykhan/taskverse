import { useEffect, useState } from 'react';
import { DraftTodo, Todo } from '@/lib/types/todo';
import { TODOS } from '@/lib/constants/todo';
import { usePusher, PusherChannels, PusherEvents } from '@/lib/pusher';
import { generateTemporaryId } from "@/lib/utils/id";

export const useFetchTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/todos');
        const result: Todo[] = await response.json();
        setTodos(result);
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return { todos, setTodos, loading };
};



export const useTodoList = (userId: string) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const pusherClient = usePusher({
    userId,
    channelName: PusherChannels.TodoChannel,
  });

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

  const addTodo = (content: string) => {
    const newTask: DraftTodo = {
      content,
      isDone: false,
      createdBy: userId,
    };
    fetch("/api/todos/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
  };

  const toggleTodoDone = (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      fetch("/api/todos/mark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, isDone: !todo.isDone, markedBy: userId }),
      });
    }
  };

  const deleteTodo = (id: string) => {
    fetch("/api/todos/delete", {
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
