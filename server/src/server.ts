import Fastify from "fastify";
import cors from "@fastify/cors";
import {PrismaClient} from "@prisma/client";
import { appRoutes } from "./routes"

// Fastify - framework back-end
const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})
app.register(appRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0'
}).then(() => {
  console.log('HTTP Server is running on port 3333! 🚀');
});

