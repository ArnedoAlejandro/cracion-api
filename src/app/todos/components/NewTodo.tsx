'use client';

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { createTodo, deleteTodo } from "../helpers/todos";
import {  useRouter } from "next/navigation";
import { addTodo, serverDeleteTodo } from "../actions/todo-actions";


export const NewTodo = () => { 


  const router = useRouter()
  const [ description, setDescription ] = useState("")

  const onSubmit = async(e : FormEvent) =>{
    e.preventDefault()

    if(description.trim().length === 0) return

    try{
      await addTodo(description)
      // await createTodo(description);
      // router.refresh()
      setDescription("")

    }catch(error){
      console.log(error)
      throw new Error("No se pudo crear la tarea")
    }
  }

  // const deleteCompleted = async () => {
  //   try{
  //     await deleteTodo()
  //     router.refresh()
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  return (
    <form onSubmit={onSubmit}  className='flex w-11/12 m-auto'>

      <input type="text"
        onChange= { (e) => setDescription(e.target.value) }
        value={description}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        onClick={ ()=> serverDeleteTodo() }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline/>
        Delete
      </button>


    </form>
  )
}