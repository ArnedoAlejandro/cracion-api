import TodosGrid from "@/app/todos/components/TodosGrid";
import prisma from "@/lib/prisma";
import React from "react";

export const metadata = {
  title: "Todos items",
  description: "Todos items",
};

const TodoPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });


  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
};

export default TodoPage;
