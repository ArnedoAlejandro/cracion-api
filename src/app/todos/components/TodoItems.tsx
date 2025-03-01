import { Todo } from '@prisma/client'
import React from 'react'

interface Props {
  todo: Todo
}

const TodoItems = ({ todo }: Props) => {

  return (
    <p>{todo.description}</p>
  )
}

export default TodoItems