'use client';

import { useQuery } from "@tanstack/react-query";
import { backendUrl } from "@/app/utils/constants";
import TodoList from "../todos/TodoList";
import TodoForm from "../todos/TodoForm";
import type { Todos } from "@/app/types/todos";


async function getTodos(): Promise<Todos> {
  const todos = await fetch(`${backendUrl}/todos`);
  const resTodos = await todos.json();
  console.log(`resTodos: `, resTodos);
  return resTodos;
};

export function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  });
  const todos = data?.todos || [];


  if (isLoading) return (<div>Loading...</div>);
  // if (todos)
  return (
    <main className="home
      flex flex-col justify-center items-center
      gap-4
      h-[90dvh]
      ">
      <h2>Todos</h2>

      <TodoForm />
      <TodoList todos={todos} />

    </main>
  );
};
