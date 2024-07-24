import { pusherServer, PusherChannels, PusherEvents } from "@/lib/pusher";
import { NextResponse } from "next/server";
import { updateTodo } from "@/lib/store/todos";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { id, isDone, markedBy } = await request.json();
    updateTodo(id, { isDone, markedBy });
    pusherServer.trigger(PusherChannels.TodoChannel, PusherEvents.Mark, { id, isDone, markedBy });
    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
