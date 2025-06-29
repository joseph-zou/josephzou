import { createFileRoute } from "@tanstack/react-router";
import useScrollToSection from "@/hooks/useScrollToSection";
import SectionNavigator from "@/components/SectionNavigator";
import type { Section } from "@/components/SectionNavigator";
import { FaGithub, FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/projects/deskmate")({
  component: RouteComponent,
});

function RouteComponent() {
  const sections: Section[] = [
    { id: "universal-overview", title: "Overview" },
    { id: "technical-features", title: "Technical Features" },
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
          <h1 className="project-name">DeskMate</h1>
          <p className="project-subheading">
            A Lightweight Desktop Application with Useful Widgets
          </p>
          <p className="project-subheading">Python, Tkinter, Design Patterns</p>
          <p className="project-subheading project-github">
            <div className="flex gap-x-5 mt-3">
              <a
                href="https://github.com/joseph-zou/Desktop-Pet-with-Tools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-p hover:text-black text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-p hover:text-black text-2xl"
              >
                <FaYoutube />
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
              I often find myself with numerous chrome tabs from dictionary
              lookups when reading to pomodoro timers when working. I wanted all
              these tools in one centralized place and able to work in the
              background.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="solution">
              Solution
            </p>
            <p className="project-sub-subheading-paragraph">
              Inspired by my sister's two cats Kai and Lint and my cat
              allergies, I created digital copies of them to house all my tools.
              They are able to walk around the edges of my screen but are small
              enough to not be intrustive. I've also created a script to run on
              start up to run the program so they are always there. Not a day
              goes by I don't use one of the tools.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="video-demonstration">
              Video Demonstration
            </p>
            <div className="project-pics">
              <iframe
                className="w-auto h-auto md:w-[48rem] md:h-[32rem]"
                src="https://www.youtube.com/embed/FfB2ws_rVOg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
              />
            </div>
            <p className="project-sub-subheading-paragraph text-center">
              Check out this quick 1-minute video that showcases the solution.
            </p>
          </div>
        </div>
        <div className="project-header" id="technical-features">
          <h2 className="project-heading">Technical Features</h2>
        </div>
        <div className="project-text" id="technical-features">
          <div className="project-section">
            <p className="project-sub-subheading">
              State and Singleton Design Pattern
            </p>
            <p className="project-sub-subheading-paragraph">
              This project required me to learn about various design pattern in
              order to build it. The state pattern was used to manage the
              various states (direction, orientation, action) of the sprite. The
              singleton pattern was used to host a single source of truth for
              the app state's data.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">
              Sprite logic / Transisition manager / Event generator
            </p>
            <p className="project-sub-subheading-paragraph">
              Most of sprites frames are logically altered to match its correct
              direction, so I cached it to improve performance.
            </p>
            <br />
            <p className="project-sub-subheading-paragraph">
              In order to provide smooth and realistic movement, I needed a way
              to ensure it transitioned to valid states or added the
              intermediate states to reach it. For example if it was on the
              floor (taskbar) and wanted to go to the left wall (left edge) it
              needed to flip direction if necessary and walk to it. Or if it
              wanted to go to the ceiling (top edge) it needed to go through one
              of the walls.
            </p>
            <br />
            <p className="project-sub-subheading-paragraph">
              The event generator managed directional change and action change.
              For now every 10 mins it changes action and every 5 mins it
              changes direction. It sends a request to change to the transition
              manager which faciliates the action.
            </p>
            <br />

            <p className="project-sub-subheading-paragraph">
              <i>Challenge: </i>Given tkinter's (the gui system this project
              uses) single event loop similar to javascript's it was difficult
              to handle transitions and scheduling while ensuring the UI was
              unblocked. I used callbacks and allowed the sprite to handles its
              own exit logic in its abstract base class.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">User Interface Widgets</p>
            <p className="project-sub-subheading-paragraph">
              I started to add tools to the sprite, for weather and dictionary I
              used the open weather and merriam webster api respectivity. The
              rest of the tools were built to spec of existing tools.
            </p>
          </div>
        </div>
        <div className="project-header" id="maps-header">
          <h2 className="project-heading">A Few Thoughts..</h2>
        </div>
        <div className="project-text" id="conclusion">
          <ul className="project-unordered-list">
            <li>
              <p className="project-sub-subheading-paragraph">
                Lately, I've become more self conscious of the quality of code I
                wrote, I've been reading up on design patterns from{" "}
                <a
                  className="text-blue-500"
                  href="https://refactoring.guru/design-patterns"
                  target="_blank"
                  rel="noreferrer"
                >
                  Design Guru
                </a>
                . I hope to build more projects that integrate different
                patterns.
              </p>
            </li>
          </ul>
        </div>
        <div className="project-header" id="maps-header">
          <h2 className="project-heading">Next Steps</h2>
        </div>
        <div className="project-text" id="conclusion">
          <ul className="project-unordered-list">
            <li>
              Need a way to spawn multiple sprite instances in one
              program—sharing tools and resources to keep it lightweight.
              Currently have to run the multiple instances of the program, was
              not expecting a second cat (Lint) right as when this project was
              finishing 😆.
            </li>
            <li>Add kanban style task manager</li>
            <li>Add dragging interaction with gravity</li>
            <li>Revamp UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
