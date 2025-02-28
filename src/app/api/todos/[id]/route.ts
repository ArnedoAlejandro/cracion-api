import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';
import { object, boolean, string } from 'yup';


interface Segments {
  params: { id: string }
}

export async function GET(request: Request, { params }: Segments) {

  const { id } = params;

  const objeto = await prisma.todo.findFirst({ where: { id: (id) } });

  if (!objeto) return NextResponse.json({ message: "No se encontro el ID en la base de datos" }, { status: 404 });

  return  NextResponse.json(objeto); 
}

const schemaPut = object({
  complete: boolean().optional(),
  description: string().optional()
});

export async function PUT(request: Request, { params }: Segments) {

  const { id } = params;

  const objeto =  await prisma.todo.findFirst({ where: { id: (id) } });

  if (!objeto) return NextResponse.json({ message: "No se encontro el ID en la base de datos" }, { status: 404 });

  try {
    const {description , complete} = await schemaPut.validate(await request.json());

    const update = await prisma.todo.update({ where: { id: (id) }, data: {description , complete} });
  
    return  NextResponse.json(update); 
  } catch (error) {
    return  NextResponse.json(error , { status: 400 }); 
  }
}