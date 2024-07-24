// src/app/api/todos/delete/route.ts
import { pusherServer, PusherChannels, PusherEvents } from "@/lib/pusher";
import { NextResponse } from "next/server";
import { deleteTodo } from "@/lib/store/todos";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    deleteTodo(id);
    pusherServer.trigger(PusherChannels.TodoChannel, PusherEvents.Delete, { id });
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error in deleting todo:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
