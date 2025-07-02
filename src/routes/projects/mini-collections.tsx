import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { miniProjectsData } from "@/data/mini_projects";
import type { miniProjectCardData } from "@/data/mini_projects";

export const Route = createFileRoute("/projects/mini-collections")({
  component: RouteComponent,
});

const COLUMN_WIDTH = 350;
const BASE_SPEED = 50;
const projects = miniProjectsData;
function RouteComponent() {
  const [numCols, setNumCols] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollersRef = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const cols = Math.min(4, Math.max(1, Math.floor(width / COLUMN_WIDTH)));
        setNumCols(cols);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const distributedProjects = useMemo(() => {
    const cols: miniProjectCardData[][] = Array.from(
      { length: numCols },
      () => []
    );
    projects.forEach((project, idx) => {
      cols[idx % numCols].push(project);
    });
    return cols;
  }, [numCols]);

  useEffect(() => {
    if (scrollersRef.current) {
      scrollersRef.current.forEach((scroller, i) => {
        if (scroller) {
          scroller.setAttribute("data-animated", "true");

          const height =
            scroller.querySelector(".scroller__inner")?.scrollHeight;
          const duration = height ? height / BASE_SPEED : "40";
          scroller.style.setProperty("--_animation-duration", `${duration}s`);
        }
      });
    }
  }, [numCols]);

  return (
    <div className="scroller_container" ref={containerRef}>
      {distributedProjects.map((columnProjects, i) => (
        <div
          key={i}
          className="scroller"
          data-direction={i % 2 == 0 ? "down" : "up"}
          ref={(el) => {
            scrollersRef.current[i] = el;
          }}
          data-animated="true"
        >
          <div className="scroller__inner">
            {[...columnProjects, ...columnProjects].map((p, idx) => (
              <Link
                key={idx}
                to="/"
                disabled={true}
                className="aspect-[3/4] w-full rounded-2xl shadow flex items-center justify-center text-center font-semibold text-black overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="object-cover w-full h-full"
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
