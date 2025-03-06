
import { Todo } from '@prisma/client'
import style from "./TodoItems.module.css"
import {  IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
interface Props {
  todo: Todo
  toggleTodo: (id:string, complete:boolean)=>Promise<Todo|void>
}

const TodoItems = ({ todo, toggleTodo }: Props) => {

  return (
    <div className = { todo.complete ? style.todoDone : style.todoPending}>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <div
          onClick={()=>toggleTodo(todo.id, !todo.complete)}
          className={`flex flex-row justify-start items-start gap-4 cursor-pointer`}>
          {todo.complete ? <IoCheckboxOutline size={24} /> : <IoSquareOutline size={24} />}    
          {todo.description}
        </div>
      </div>
    </div>
  )
}

export default TodoItems