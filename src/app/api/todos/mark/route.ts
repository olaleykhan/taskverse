import { PusherChannels, PusherEvents, pusherServer } from "@/lib/pusher";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { id, isDone, markedBy } = await request.json();
    pusherServer.trigger(PusherChannels.TodoChannel, PusherEvents.Mark, { id, isDone, markedBy });
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error in marking todo:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
