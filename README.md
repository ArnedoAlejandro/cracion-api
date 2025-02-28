# Development

Pasos para levantar la app en desarrollo

1-Levantar vase de datos

docker compose up -d

2-Crear una copia de el .env.template y renombrarlo a .env
3-Reemplazar las variables de entorno
4-Ejecutar el comando npm install
5-Ejecutar el comando npm run dev
6-Ejecutar estos comandos de prisma
npm prisma migrate dev
npm prisma generate
7- Ejecutar el SEED para crear localhost:3000/api/seed

# Prisma comand

npx prisma init
npx prisma migrate dev
npx prisma generate
