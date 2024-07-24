import { pusherServer } from "@/lib/pusher";
import { NextResponse } from 'next/server';
import { TODOS } from "@/lib/constants/todo";
import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {  
    return NextResponse.json(TODOS);
}

