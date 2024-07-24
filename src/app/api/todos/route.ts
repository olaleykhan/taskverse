// src/app/api/todos/route.ts
import { NextResponse } from "next/server";
import { getTodos } from "@/lib/store/todos";

export async function GET() {
  try {
    const todos = getTodos();
    return NextResponse.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
