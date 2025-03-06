"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const serverToggleTodo = async ( id: string, complete: boolean)  => {
  
  const todo = await prisma.todo.findFirst({where : {id}})

  if(!todo){
    throw `Todo con id ${id} no encontrado`
  }

  const updateTodo = await prisma.todo.update({
    where : {id}, 
    data : {complete}
  })
  revalidatePath("/dashboard/server-todos")
  return updateTodo
}


export const addTodo = async (description: string)  => {
  
  try {
    const todo = await prisma.todo.create({data : {description}})
    revalidatePath("/dashboard/server-todos")
    return todo
  } catch (error) {
    console.log(error)
  }
}

export const serverDeleteTodo = async () =>{
  try {
    await prisma.todo.deleteMany({where : {complete : true}})
    revalidatePath("/dashboard/server-todos")
  } catch (error) {
    console.log(error)
  }
}