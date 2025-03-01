
import TodoItems from './TodoItems'
import { Todo } from '@prisma/client'

interface Props {
  todos?: Todo[];
}

const TodosGrid = ({ todos = [] }: Props) => {


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {todos?.map((todo) => (
        <TodoItems key={todo.id} todo={todo} />
      ))}
    </div>
  
  )
}

export default TodosGrid