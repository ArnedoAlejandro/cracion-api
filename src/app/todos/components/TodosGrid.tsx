"use client"
import TodoItems from './TodoItems'
import { Todo } from '@prisma/client'
import * as api from "@/app/todos/helpers/todos"
import { useRouter } from 'next/navigation';
import { serverToggleTodo } from '../actions/todo-actions';

interface Props {
  todos?: Todo[];
}

const TodosGrid = ({ todos = [] }: Props) => {

  // const router = useRouter()

  // const updateTodo = async ( id:string, complete: boolean)  => {

  //   await api.updateTodo(id, complete);
  //   router.refresh();
    
  // }


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {todos?.map((todo) => (
        <TodoItems key={todo.id} todo={todo} toggleTodo={serverToggleTodo} />
      ))}
    </div>
  
  )
}

export default TodosGrid