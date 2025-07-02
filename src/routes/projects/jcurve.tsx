import { createFileRoute } from "@tanstack/react-router";
import useScrollToSection from "@/hooks/useScrollToSection";
import SectionNavigator from "@/components/SectionNavigator";
import type { Section } from "@/components/SectionNavigator";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";

export const Route = createFileRoute("/projects/jcurve")({
  component: RouteComponent,
});

function RouteComponent() {
  const sections: Section[] = [
    { id: "universal-overview", title: "Overview" },
    { id: "conclusion", title: "A Few Thoughts" },
    { id: "next-steps", title: "Next Steps" },
  ];
  const scrollToSection = useScrollToSection();
  return (
    <div className="project-container">
      <div className="navigator">
        <SectionNavigator sections={sections} handleClick={scrollToSection} />
      </div>
      <div className="project">
        <div className="project-header" id="maps-header">
          <h1 className="project-name">JCurve</h1>
          <p className="project-subheading">
            Shopify store that I built and designed. Did it for a friend who
            sells wheels. Currently live and active.
          </p>
          <p className="project-subheading">Shopify, Figma</p>
          <p className="project-subheading project-github">
            <div className="flex gap-x-5 mt-3">
              <a
                href="https://jcurveracing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-p hover:text-black text-2xl"
              >
                <FaGlobe />
              </a>
            </div>
          </p>
        </div>
        <div className="project-header" id="universal-overview">
          <h2 className="project-heading" id="">
            Overview
          </h2>
        </div>
        <div className="project-text" id="introduction">
          <div className="project-section">
            <p className="project-sub-subheading">Introduction</p>
            <p className="project-sub-subheading-paragraph flex w-full ">
              As my friend's business grew, he wanted to move away from handling
              everything manually and migrate to Shopify.
            </p>
            <br />
          </div>
        </div>
        <div className="project-header" id="maps-header">
          <h2 className="project-heading">A Few Thoughts..</h2>
        </div>
        <div className="project-text" id="conclusion">
          <ul className="project-unordered-list">
            <li>
              <p className="project-sub-subheading-paragraph">
                As with most of my projects, I've never used the software
                before, but I find that building from what you want not what you
                know makes it faster to learn. Similar to test-driven
                development.
              </p>
            </li>
            <li>
              <p className="project-sub-subheading-paragraph">
                This project went beyond building a visually appealing frontend
                — I was responsible for developing a cohesive brand identity,
                from selecting color palettes and designing logos to crafting
                the overall look and feel of the pages. It was a very different
                experience.
              </p>
            </li>
          </ul>
        </div>
        <div className="project-header" id="maps-header">
          <h2 className="project-heading">Next Steps</h2>
        </div>
        <div className="project-text" id="conclusion">
          <ul className="project-unordered-list">
            <li>Need to develop wheel cap designs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
