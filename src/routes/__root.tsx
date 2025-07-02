import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col min-h-screen w-full bg-background">
        <Navbar />
        <hr />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  ),
});
