import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from "hono/cors";

const app = new Hono()
app.use("*", cors());

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
