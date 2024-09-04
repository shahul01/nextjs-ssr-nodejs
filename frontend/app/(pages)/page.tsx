'use client';
import { useEffect, useState } from "react";
import { backendUrl } from "../utils/constants";
import { createTodoAction } from "./actions";


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
  <main className="app p-4">
    <form action={createTodoAction.bind(null)}>
      <input
        type="text"
        name='title'
        placeholder="title"
        className="text-black border border-gray-400 mr-2 outline-none"
      />
      <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-2 rounded-sm"
      >
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
}
