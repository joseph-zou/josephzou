import { createFileRoute } from "@tanstack/react-router";
import useScrollToSection from "@/hooks/useScrollToSection";
import SectionNavigator from "@/components/SectionNavigator";
import type { Section } from "@/components/SectionNavigator";
import { FaGithub, FaYoutube } from "react-icons/fa";
export const Route = createFileRoute("/projects/leethub")({
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
          <h1 className="project-name">LeetHub</h1>
          <p className="project-subheading">
            A tools to automate sending LeetCode submissions to GitHub
          </p>
          <p className="project-subheading">
            Redis, Docker, OAuth, Github Apps, Service Workers, Webhooks,
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
              I like to send my solved LeetCode solutions to Github so I can
              review them later so my usual process would be to always create a
              terminal and manually creating a new file and commiting it to my
              repository. I found others who also do the same so I thought "Why
              not automate this?".
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="solution">
              Solution
            </p>
            <p className="project-sub-subheading-paragraph">
              Create an chrome extension that is able to put a button called
              "Publish" right next to the "Submit" button in LeetCode that lets
              me publish my code to GitHub. Also set up preferences
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="video-demonstration">
              Video Demonstration
            </p>
            <div className="project-pics">
              <iframe
                className="w-auto h-auto md:w-[48rem] md:h-[32rem]"
                src="https://www.youtube.com/embed/"
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
        <div className="project-text">
          <div className="project-section">
            <p className="project-sub-subheading">
              GitHub OAuth and GitHub App
            </p>
            <p className="project-sub-subheading-paragraph">
              Implemented GitHub’s OAuth flow to authenticate and create user
              accounts, followed by a separate GitHub App installation to enable
              code-pushing functionality. While OAuth alone could have sufficed,
              I opted for the more secure, fine-grained permissions model
              offered by GitHub Apps, reducing unnecessary access scopes at the
              cost of added complexity—an intentional trade-off I believe was
              worth it.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">
              Content Scripts and Service Workers
            </p>
            <p className="project-sub-subheading-paragraph">
              Designed the extension to leverage content scripts and service
              workers to handle background processing. Service workers allow the
              application to process requests even when the UI is closed,
              improving reliability and enabling persistent functionality.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">
              Multi-Configuration Build Setup
            </p>
            <p className="project-sub-subheading-paragraph">
              Instead of a single Vite configuration, the extension required
              three separate builds—for content scripts, background service
              workers, and the UI—each with its own configuration. Integrating
              these into a cohesive build pipeline provided valuable insight
              into build tools.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Redis, AWS, and CI/CD</p>
            <p className="project-sub-subheading-paragraph">
              Used Redis for session storage, LRU cache for GitHub installation
              clients, AWS to host the backend, MongoDB Atlas for persistent
              data, and custom GitHub Actions workflows for continuous
              integration and deployment.
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
                Ever since I read the book "Automate the Boring Stuff with
                Python" by Al Sweigart, I've always had in the back of my mind
                "Can I automate this?". That's mostly where I find useful
                project ideas. Things that I and my friends can use.
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
              Add a commit log into the NavBar so users can see most recent
              commits.
            </li>
            <li>This was a quick build so I need to refractor the code.</li>
            <li>Improve the UI</li>
            <li>
              Find a way to extract LeetCode testcase solutions rather than just
              testcase inputs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
