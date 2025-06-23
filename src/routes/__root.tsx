import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="h-screen w-screen bg-background">
        <Navbar />
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
