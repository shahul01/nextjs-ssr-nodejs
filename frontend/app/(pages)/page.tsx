'use client';
import { useEffect, useState } from "react";
import { backendUrl } from "../utils/constants";


async function getTodos() {
  const todos = await fetch(`${backendUrl}/todos`);
  const resTodos = await todos.json();
  console.log(`resTodos: `, resTodos);
  return resTodos;
};

type Todo= {
  id: string;
  title: string;
};

export default function Home() {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  async function init() {
    const { todos: newTodos } = await getTodos();
    if (!newTodos) return;
    setTodos(newTodos);
  };

  useEffect(() => {
    init();
  },[]);


  return (
  <main className="app">

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
}
