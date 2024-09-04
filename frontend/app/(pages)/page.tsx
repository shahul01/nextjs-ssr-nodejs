'use client';
import { useEffect, useState } from "react";
import { backendUrl } from "./utils/constants";


async function getTodos() {
    const todos = await fetch(`${backendUrl}/todos`);
    const resTodos = await todos.json();
    console.log(`resTodos: `, resTodos);
    return resTodos;
};

export default function Home() {
    const [ todos, setTodos ] = useState([]);

    async function init() {
        const newTodos = await getTodos();
        setTodos(newTodos);
    };

    useEffect(() => {
        init();
    },[]);


  return (
    <main className="app">
        {
            JSON.stringify(todos,null, 2)
        }

    </main>
  );
}
