import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

export function About() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">About Page</h1>
    </div>
  );
}
