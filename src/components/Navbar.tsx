import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <>
      <div className="p-5 px-4  mx-2 flex flex-wrap font-serif md:justify-between md:items-center md:px-16 md:p-10">
        <Link to="/" className="text-2xl md:text-5xl">
          Joseph Zou
        </Link>
        <div className="flex flex-wrap gap-3 text-base sm:text-lg md:text-3xl">
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
