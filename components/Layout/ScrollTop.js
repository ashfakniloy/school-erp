import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const buttonVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", buttonVisibility);
    return () => {
      window.removeEventListener("scroll", buttonVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="scroll to top"
      onClick={scrollToTop}
      className={
        isVisible
          ? "fixed bottom-10 right-8 p-2 text-2xl text-slate-100 bg-gray-500 rounded transition duration-300 hover:bg-gray-700 active:scale-90"
          : "hidden"
      }
    >
      <FaAngleUp />
    </button>
  );
}

export default ScrollTop;
