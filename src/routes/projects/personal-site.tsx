import { createFileRoute } from "@tanstack/react-router";
import useScrollToSection from "@/hooks/useScrollToSection";
import SectionNavigator from "@/components/SectionNavigator";
import type { Section } from "@/components/SectionNavigator";
import { FaGithub, FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/projects/personal-site")({
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
          <h1 className="project-name">Personal Website</h1>
          <p className="project-subheading">
            A summary of what went into my website and its goals.
          </p>
          <p className="project-subheading">
            React | Typescript | Vite | Three.js | Tailwind"
          </p>
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
              I rarely use social media, but I wanted a space to share things
              that interest me—so I built this site. Having this personal site
              filled with my projects has also been incredibly motivating; it
              makes finishing them feel that much more rewarding.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="more-than-a-portfolio">
              More Than a Portfolio
            </p>
            <p className="project-sub-subheading-paragraph">
              This site is more of a personal platform than a traditional
              portfolio. It just so happens that what I enjoy sharing most are
              the projects I’ve built and use myself. To make it feel truly
              unique, I created a 3D art gallery that serves as a visual feed—my
              own take on a social media timeline.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="video-demonstration">
              Video Demonstration
            </p>
            <div className="project-pics">
              <iframe
                className="w-auto h-auto md:w-[48rem] md:h-[32rem]"
                src="https://www.youtube.com/embed/NONE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
              />
            </div>
            <p className="project-sub-subheading-paragraph">
              Check out this quick 1-minute video that showcases the gallery.
            </p>
          </div>
        </div>
        <div className="project-header" id="technical-features">
          <h2 className="project-heading">Technical Features</h2>
        </div>
        <div className="project-text" id="technical-features">
          <div className="project-section">
            <p className="project-sub-subheading">React, Vite and TanStack</p>
            <p className="project-sub-subheading-paragraph">
              I chose this tech stack because it was familiar and comfortable to
              work with. I enjoy the fast development experience that Vite
              offers, especially its hot reloading and lightweight local server.
              While I considered using the Next.js framework, my original goal
              was to host the site on GitHub Pages—which doesn’t support
              server-side rendering. I opted to use TanStack Router after seeing
              its growing adoption in the industry, and I’ve really appreciated
              its simplicity and excellent documentation.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Three.js</p>
            <p className="project-sub-subheading-paragraph">
              While exploring other personal websites, I noticed that some
              featured 3D models. This sparked a deep dive into Three.js and how
              modern websites can leverage WebGL and GPU acceleration to create
              rich, interactive 3D experiences. That curiosity eventually led to
              the creation of my own 3D gallery. The idea for the 3D gallery
              came out of nowhere—literally. I saw a random sticky note that
              just said 'exhibition' on it.
            </p>
            <br />
            <p className="project-sub-subheading-paragraph">
              <i>Challenge:</i> Integrating Three.js directly with React proved
              extremely difficult due to their conflicting programming
              models—Three.js is imperative, while React is declarative.
              Managing animation loops, camera movement, and React's component
              lifecycle together quickly became messy and unsustainable. The
              solution I found was using react-three-fiber a "renderer for
              three.js" it allowed me to build models declaratively and it
              handled their renders seperately.
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
                It’s always challenging to build something while learning it at
                the same time—but for me, it’s the fastest way to grow. Working
                through this project while learning Three.js gave me a real,
                hands-on sense of progress. Getting hands-on experience made a
                huge difference—when I watched YouTube videos or read Medium
                posts, I could actually understand what they were talking about
                because I had real context from building things myself.
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
              I also enjoy to cook so I may add a scrapbook tab of things I
              cooked.
            </li>
            <li>Continue adding all the projects I've built.</li>
            <li>Need to refractor the gallery code</li>
            <li>
              Migrate to next.js to improve SEO by utilzing some server side
              rendering like using react-helmet to change the head tab content,
              there's only so much you can do with meta tags.
            </li>
            <li>Get my own domain name.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
