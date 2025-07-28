import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <>
      <div className="py-2 px-4 gap-x-10 flex flex-col flex-wrap font-serif justify-between items-center md:flex-row md:px-16 md:p-8 md:gap-x-0">
        <Link to="/" className="text-2xl md:text-3xl mt-2 mb-2">
          Joseph Zou
        </Link>

        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-base sm:text-lg md:text-xl md:flex-row">
          <Link to="/" className="[&.active]:font-bold">
            About
          </Link>
          <span className="text-gray-500">•</span>

          <Link to="/projects" className="[&.active]:font-bold">
            Projects
          </Link>
          <span className="text-gray-500">•</span>

          <Link to="/gallery" className="[&.active]:font-bold">
            Gallery
          </Link>
          <span className="text-gray-500 hidden sm:inline">•</span>

          {/* Wrap these in a flex-nowrap container to keep them together */}
          <div className="flex gap-x-3 flex-nowrap">
            <Link to="/changelog" className="[&.active]:font-bold">
              Changelog
            </Link>
            <span className="text-gray-500">•</span>
            <Link to="/resume" className="[&.active]:font-bold">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
