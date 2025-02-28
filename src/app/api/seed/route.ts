
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'

export async function GET() { 

  await prisma.todo.deleteMany()

  await prisma.todo.createMany({
    data: [
      { description: 'Todo 1', complete: false },
      { description: 'Todo 2' },
      { description: 'Todo 3' },
    ],
  })

  return NextResponse.json({
    message: 'Esto es una semilla'
  });
}