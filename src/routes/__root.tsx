import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "../components/Navbar";
import ChatbotButton from "@/components/Chatbot/Chatbot";

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollToTop />
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
