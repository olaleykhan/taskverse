import { PusherChannels, PusherEvents, pusherServer } from "@/lib/pusher";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    pusherServer.trigger(PusherChannels.TodoChannel, PusherEvents.Delete, { id });
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error in deleting todo:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
