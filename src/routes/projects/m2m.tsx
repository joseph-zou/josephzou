import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/m2m")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/projects/m2m"!</div>;
}
