import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/monkeystash")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Building a finance dashboard that lets me view all sources, assets and
      create daily push notifications. Uses this{" "}
      <a
        href="https://github.com/dotnetfactory/personal-financial-dashboard"
        className="text-blue-500 hover:text-blue-400 underline hover:no-underline transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        source code
      </a>{" "}
      as a template:
    </div>
  );
}
