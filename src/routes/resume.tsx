import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <iframe
        src="/Joseph_v2025_resume.pdf#zoom=100"
        className="w-full h-full border-none"
        title="Resume"
      ></iframe>
    </div>
  );
}
