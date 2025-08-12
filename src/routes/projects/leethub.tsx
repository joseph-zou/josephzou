import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/leethub")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/projects/leethub"! This one was a doozy, I had to interact with
      express-session, github oauth + github app installation, work with chrome
      extensions content and background scripts and a bunch of dom elements.
      Also had to make multiple config files because each environment needed its
      own build settings.
    </div>
  );
}
