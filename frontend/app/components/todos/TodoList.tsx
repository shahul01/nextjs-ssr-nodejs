import type { Todos } from '@/app/types/todos';


export default function TodoList({todos}: Todos) {

  return (
    <div className="todo-lists">
      {
        todos?.map((todo) => (
          <div key={todo.id}>
            {todo.title}
          </div>
        ))
      }
    </div>
  )
};
