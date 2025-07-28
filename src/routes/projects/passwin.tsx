import { createFileRoute } from "@tanstack/react-router";
import useScrollToSection from "@/hooks/useScrollToSection";
import SectionNavigator from "@/components/SectionNavigator";
import type { Section } from "@/components/SectionNavigator";
import { FaGithub, FaYoutube, FaChrome } from "react-icons/fa";

export const Route = createFileRoute("/projects/passwin")({
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
          <h1 className="project-name">Password Manager</h1>
          <p className="project-subheading"></p>
          <p className="project-subheading"></p>
          <p className="project-subheading project-github">
            <div className="flex gap-x-5 mt-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="pointer-events-none text-gray-400 cursor-not-allowed text-2xl"
                aria-disabled="true"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-p hover:text-black text-2xl"
              >
                <FaChrome />
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
              I don’t know if you’re like me, but I’ve been storing all my
              passwords in the Notes app on my iPhone for years. Ironically, the
              reason I avoided using a password manager was paranoia — I didn’t
              trust putting all my credentials into a third-party vault, even
              though that would’ve actually been the safer option. With data
              breaches happening every other week and personal info being a
              goldmine for attackers, I finally decided to build my own password
              manager. A lot of existing ones still rely on outdated algorithms
              like PBKDF2 — which dates all the way back to 1999. I’m not
              claiming mine will be better, but at least if my data ever gets
              compromised, it’s on my own terms. And let’s be honest — compared
              to a database of millions of users, I doubt my vault is that
              interesting.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="solution">
              Solution
            </p>
            <p className="project-sub-subheading-paragraph">
              I built a Chrome extension and hosted it on AWS. It manages users
              and sessions, with all data encrypted end-to-end.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="video-demonstration">
              Video Demonstration
            </p>
            <div className="project-pics">
              <iframe
                className="w-auto h-auto md:w-[48rem] md:h-[32rem]"
                src=""
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
              Zero Knowledge Architecture
            </p>
            <p className="project-sub-subheading-paragraph">
              All user data is decrypted locally, and everything sent to the
              server is already encrypted. On the server side, the data is
              encrypted again before being stored in MongoDB Atlas. This ensures
              users have full control of their data.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">
              Key derivation and Encryption algorithms
            </p>
            <p className="project-sub-subheading-paragraph">
              I used argon2id to derive the encryption key from the master
              password, parameters are selected according to the recommendataion
              of OWASP's{" "}
              <a
                className="text-blue-500"
                href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"
                target="_blank"
                rel="noreferrer"
              >
                Password Storage Cheat Sheet
              </a>
              . I chose this algorithm because it is both CPU and memory
              intensive, making it a better alternative to PBKDF2 that is only
              CPU intensive. It was also the recommendataion by OSWAP and the
              winner of a 2015 Password Hashing Competition.
            </p>
            <br />
            <p className="project-sub-subheading-paragraph">
              For the encryption algorithm I used AES-GCM. Which is a type of
              authentication encryption algorithm so it can detect tampering.
              Most password managers use AES-CBC, which is an older algorithm
              that is not optimized for modern CPUs.
            </p>
            <br />
            <p className="project-sub-subheading-paragraph">
              <i>Challenge: </i> It gets messy managing the entire flow and
              encryption pipeline.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">
              User management and session
            </p>
            <p className="project-sub-subheading-paragraph">
              I manually created an authentication pipeline that utilizes
              sessions. Initially I was using access tokens but because of the
              lack of control I migrated over to using sessions. I found a
              document on how Last Pass does there and used it as{" "}
              <a
                className="text-blue-500"
                href="https://chenfengbao.com/lastpass-basics"
                target="_blank"
                rel="noreferrer"
              >
                a reference by Chen Fengbao.
              </a>
            </p>
          </div>
          <div className="project-pics">
            <img
              className="block max-w-full h-auto mx-auto"
              src="/images/PasswordManager/authentication_pipeline.png"
            />
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Deployment</p>
            <p className="project-sub-subheading-paragraph">
              I used an AWS EC2 instance to deploy my backend, Atlas for my
              database and DuckDNS for my domain name. I used Let's Encrypt to
              obtain SSL/TLS certificates for secure communication. I built a
              reverse proxy with Nginx to foward to my backend. For CICD I used
              github actions. The frontend is published to the Chrome Extension
              Web Store.
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
                I definitely underestimated this project. I expected to be done
                in a week most but it took two weeks. There was so much to do:
              </p>
              <ul className="project-text list-disc ml-5 mt-1">
                <li>Build user authentication and session management</li>
                <li>
                  Finding and implementing a robust key derivation and
                  encryption algorithm
                </li>
                <li>Learn how to write chrome extensions.</li>
                <li>Setting up Atlas and my AWS instance.</li>
                <li>and more...</li>
              </ul>
            </li>
            <li>
              <p className="project-sub-subheading-paragraph">
                I really enjoyed this project because it taught me alot about
                cryptography even hard to believe principles like Kerckhoff's.
              </p>
            </li>
            <li>
              <p className="project-sub-subheading-paragraph">
                It feels nice to own your own service with users, albeit the
                server cost.
              </p>
            </li>
          </ul>
        </div>
        <div className="project-header" id="next-steps">
          <h2 className="project-heading">Next Steps</h2>
        </div>
        <div className="project-text" id="conclusion">
          <ul className="project-unordered-list">
            <li>
              Move more of the logic to service workers rather than in the popup
              ui.
            </li>
            <li>Add content scripts for auto password filling.</li>
            <li>Scale if needed, ideally move to AWS ECS.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
