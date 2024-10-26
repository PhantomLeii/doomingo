import app from "./server/server";

export const server = Bun.serve({
  hostname: "0.0.0.0",
  fetch: app.fetch,
});

console.log(`Listening on ${process.env.BASE_URL}`);
