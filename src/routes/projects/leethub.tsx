import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/leethub')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/leethub"!</div>
}
