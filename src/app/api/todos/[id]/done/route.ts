import { pusherServer } from "@/lib/pusher";
import { NextResponse } from 'next/server';
import { TODOS } from "@/lib/constants/todo";

export const dynamic = 'force-dynamic';

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const index = TODOS.findIndex(todo => todo.id === id);

    if (index === -1) {
      return NextResponse.json(
        { message: 'Todo item not found', status: false },
        { status: 404 }
      );
    }

    TODOS[index].isDone = true;

    await pusherServer.trigger('todoChannel', 'complete', { id });

    return NextResponse.json(
      { status: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error', status: false },
      { status: 500 }
    );
  }
}