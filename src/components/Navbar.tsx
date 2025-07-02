import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <>
      <div className="p-5 px-4 gap-x-10 flex flex-wrap font-serif justify-between items-center md:px-16 md:p-8 md:gap-x-0">
        <Link to="/" className="text-2xl md:text-3xl">
          Joseph Zou
        </Link>
        <div className="flex gap-3 text-base sm:text-lg md:text-xl">
          <Link to="/" className="[&.active]:font-bold">
            About
          </Link>
          <Link to="/projects" className="[&.active]:font-bold">
            Projects
          </Link>
          <Link to="/gallery" className="[&.active]:font-bold">
            Gallery
          </Link>
          <Link to="/resume" className="[&.active]:font-bold">
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
