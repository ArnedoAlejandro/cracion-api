// TODO estas dos exportaciones nos revalida el cache de la página 
export const dynamic = "force-dynamic"
export const revalidate = 0

import { NewTodo } from "@/app/todos/components/NewTodo";
import TodosGrid from "@/app/todos/components/TodosGrid";
import prisma from "@/lib/prisma";
import React from "react";

export const metadata = {
  title: "Todos items",
  description: "Todos items",
};

const ServerTodoPage = async () => {

  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });


  return (
    <>
      <span className="text-2xl m-9">Server actions</span>
      <div className="grid gap-6 p-4 ">
        <NewTodo/>
        <TodosGrid todos={todos} />
      </div>
    </>
  );
};

export default ServerTodoPage;
