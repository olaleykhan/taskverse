"use client";
import { useState } from "react";
import TodoList from "@/features/todo/TodoList";
import Auth from "@/features/auth/Auth";

export default function Home() {
  const [userId, setUserId] = useState<string | undefined>(undefined);
  if (!userId) return <Auth setUserId={setUserId} />;

  return <TodoList userId={userId} />;
}
