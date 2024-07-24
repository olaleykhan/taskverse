import { PusherChannels, PusherEvents, pusherServer } from "@/lib/pusher";
import { NextResponse } from "next/server";
import { Todo } from "@/lib/types";
import { addTodo } from "@/lib/store/todos";
import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { content, isDone, createdBy } = await request.json();
    const ct = content.trim()

    if (!ct) {
      return NextResponse.json(
        { message: 'Please provide the content for your todo item | it must not be empty', status: false },
        { status: 400 }
      );
    }

    const todo: Todo = {
      id: uuidv4(),
      isDone: isDone?? false,
      createdBy: createdBy?? "John Doe",
      content:ct,
      createdAt: new Date().toISOString()
    };
    addTodo(todo)
    pusherServer.trigger(PusherChannels.TodoChannel, PusherEvents.Add, todo);
    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
