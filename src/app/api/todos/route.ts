import { pusherServer } from "@/lib/pusher";
import { NextResponse } from 'next/server';
import { TODOS } from "@/lib/constants/todo";
import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {  
    return NextResponse.json(TODOS);
}


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

    // if (content.length <= 5) {
    //   return NextResponse.json(
    //     { message: 'Todo item should be more than 5 characters', status: false },
    //     { status: 400 }
    //   );
    // }

    const item = {
      id: uuidv4(), // Generate a new unique ID
      content: content.trim(),
      isDone: isDone ?? false,
      createdBy: createdBy,
      markedBy: undefined,
    };

    TODOS.push(item);

    // await pusherServer.trigger('todo', 'items', item);
    await pusherServer.trigger('todoChannel', 'add', item);

    return NextResponse.json(
      { message: 'TODO item was successfully created', status: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating todo item:', error);
    return NextResponse.json(
      { message: 'Internal server error', status: false },
      { status: 500 }
    );
  }
}

