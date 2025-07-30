import { createFileRoute } from "@tanstack/react-router";
import useScrollToSection from "@/hooks/useScrollToSection";
import SectionNavigator from "@/components/SectionNavigator";
import type { Section } from "@/components/SectionNavigator";
import { FaGithub, FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/projects/m2m")({
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
          <h1 className="project-name">M2M</h1>
          <p className="project-subheading">
            A complete solution to connecting donors, recievers, and staff.
            Digitalizing the entire workflow from decades of manual paper
            records.
          </p>
          <p className="project-subheading">React, Express, Node, AWS, SQL</p>
          <p className="project-subheading project-github">
            <div className="flex gap-x-5 mt-3">
              <a
                href="https://github.com/mtmvuse/MotherToMother"
                target="_blank"
                rel="noopener noreferrer"
                className="text-p hover:text-black text-2xl"
              >
                <FaGithub />
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
            <p className="project-sub-subheading-paragraph ">
              I was part of a university organization called{" "}
              <a
                className="text-blue-500"
                href="https://changeplusplus.org"
                target="_blank"
                rel="noreferrer"
              >
                Change++
              </a>
              , where we partner with non-profits to build custom digital tools
              at no cost. I worked on a project for Mothers to Mothers, a
              Nashville-based nonprofit founded in 2004 that provides essential
              childcare items—such as diapers, car seats, and cribs—to
              under-resourced mothers and children. Their previous donation and
              distribution process was manual, paper-based, and prone to errors,
              causing inventory delays.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="solution">
              Solution
            </p>
            <p className="project-sub-subheading-paragraph">
              To modernize Mothers to Mothers’ operations, we developed two
              custom platforms: a user-facing web app and an admin portal.
              Together, they established an integrated inventory management
              system that replaced manual, paper-driven processes. The solution
              enabled accurate real-time inventory tracking, streamlined donor
              and recipient data management, and accelerated the shopping
              process for partner agencies—eliminating delays and reducing
              errors in their workflow.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="video-demonstration">
              Video Demonstration
            </p>
            <div className="project-pics">
              {/* <iframe
                className="w-auto h-auto md:w-[48rem] md:h-[32rem]"
                src="https://www.youtube.com/embed/FfB2ws_rVOg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
              /> */}
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
              Prisma ORM, AWS RDS, AWS Amplify, AWS EC2
            </p>
            <p className="project-sub-subheading-paragraph">
              The platform’s data is managed using SQL via Prisma's Object
              Relational Mapper (ORM) and hosted on Amazon RDS. Both the
              user-facing application and the admin portal are built with React,
              with the user app implemented as a Progressive Web App (PWA) to
              enable mobile-friendly functionality. The applications are hosted
              on AWS Amplify, with domain management handled through AWS Route
              53. The backend is hosted on AWS EC2. Authentication is provided
              through firebase.
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
                As the codebase expanded, it became increasingly challenging to
                grasp every detail. However, by maintaining a modular
                architecture, development shifted from trying to understand the
                entire system to simply adding well-defined, independent
                components.
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
              I've continued to maintain relationships with Mothers to Mothers,
              now I'm their sole engineering helping them maintain the site and
              fix any issues.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
