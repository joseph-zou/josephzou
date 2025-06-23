import { useCallback } from "react";

const useScrollToSection = () => {
  const scrollToSection = useCallback((id: string) => {
    // const header = document.querySelector("header");
    const element = document.getElementById(id);
    // const offset = header ? header.clientHeight : 0;

    if (element) {
      // const top =
      //   element.getBoundingClientRect().top + window.scrollY - (offset + 20);
      // window.scrollTo({ top, behavior: "smooth" }); # only if sticky navbar
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
