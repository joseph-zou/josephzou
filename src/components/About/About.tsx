import profileImage from "/images/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="flex flex-col bg-background justify-center mt-2 px-10 gap-y-3 md:flex-row md:gap-12 md:items-start md:mt-10">
        <div className="md:w-lg md:h-lg">
          <img
            src={profileImage}
            alt="My profile photo"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col md:w-lg md:h-lg ">
          <p className="text-sm text-p leading-relaxed md:text-2xl ">
            <span className="font-serif text-lg md:text-3xl text-black inline-block mb-3">
              Greetings, I’m Joe.
            </span>
            <br />
            Welcome to my corner of the internet!
            <br />
            I’m a recent graduate from
            <span className="font-bold"> Vanderbilt University</span>, where I
            studied
            <span className="font-bold"> Computer Science</span>. I'm passionate
            about developing practical, user-focused tools that simplify
            everyday tasks — and occasionally experimenting with more
            unconventional ideas. Thank you for visiting — I appreciate your
            time!
          </p>
          <div className="flex gap-x-4 md:mt-10 mt-3">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-p hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-p hover:text-black text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-p hover:text-black text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
