// src/app/api/todos/route.ts
import { NextResponse } from "next/server";
import { getTodos } from "@/lib/store/todos";


export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const todos = getTodos();
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
