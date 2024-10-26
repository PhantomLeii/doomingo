import app from "./server/app";

const server = Bun.serve({
  fetch: app.fetch,
});

if (process.env.NODE_ENV === "development")
  console.log("Listening on http://127.0.0.1:3000/api");
