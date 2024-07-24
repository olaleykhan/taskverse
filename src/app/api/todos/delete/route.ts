import { pusherServer, PusherChannels, PusherEvents } from "@/lib/pusher";
import { NextResponse } from "next/server";
import { deleteTodo } from "@/lib/store/todos";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    deleteTodo(id);
    pusherServer.trigger(PusherChannels.TodoChannel, PusherEvents.Delete, { id });
    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
