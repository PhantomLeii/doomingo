import app from "./server/app";

const server = Bun.serve({
  fetch: app.fetch
})

console.log(`Listening on ${process.env.BASE_URL}`);