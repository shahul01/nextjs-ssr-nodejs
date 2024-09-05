import type { Todos } from '@/app/types/todos';


export default function TodoList({todos}: Todos) {

  return (
    <div className="todo-lists overflow-hidden">
      {
        todos?.map((todo) => (
          <div key={todo.id} className='todo w-52'>
            {todo.title}
          </div>
        ))
      }
    </div>
  )
};
