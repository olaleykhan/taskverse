import { pusherServer } from "@/lib/pusher";
import { NextResponse } from "next/server";
import { DraftTodo, Todo } from "@/lib/types";
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const draft: DraftTodo = await request.json();
    const todo = {
      id: uuidv4(),
      ...draft
    }
    pusherServer.trigger("private-todo-channel", "add", todo);
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error in adding todo:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
