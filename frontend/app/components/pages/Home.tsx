'use client';

import { useQuery } from "@tanstack/react-query";
import { createTodoAction } from "../../(pages)/actions";
// import { backendUrl } from "@/app/utils/constants";


type Todo= {
  id: string;
  title: string;
};

async function getTodos() {
  const todos = await fetch(`http://localhost:8010/todos`);
  const resTodos = await todos.json();
  console.log(`resTodos: `, resTodos);
  return resTodos;
};

export function Home() {
  const { data: {todos}, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  });

  // const isLoading = true;

  if (isLoading) return <div>Loading...</div>

  if (todos)
  return (
  <main className="app p-4">
    {/* { JSON.stringify(typeof(todos)) } */}

    <form action={createTodoAction.bind(null)}>
      <input
        type="text"
        name='title'
        placeholder="title"
        className="text-black border border-gray-400 mr-2 outline-none"
      />
      <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-2 rounded-sm">
        Submit
      </button>

    </form>

    <br /><hr />
    <h2>Todos</h2>

    <div className="todo-lists">
      {
        todos?.map((todo: Todo) => (
          <div key={todo.id}>
            {todo.title}
          </div>
        ))
      }
    </div>

  </main>
  );
};
