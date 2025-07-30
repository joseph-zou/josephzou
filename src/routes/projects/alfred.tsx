import { createFileRoute } from "@tanstack/react-router";
import useScrollToSection from "@/hooks/useScrollToSection";
import SectionNavigator from "@/components/SectionNavigator";
import type { Section } from "@/components/SectionNavigator";
import { FaGithub, FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/projects/alfred")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>coming soon</div>;
}
