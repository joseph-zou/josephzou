import { createFileRoute } from "@tanstack/react-router";
import Changelog from "@/components/Changelog";

export const Route = createFileRoute("/changelog")({
  component: Changelog,
});
