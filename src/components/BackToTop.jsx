import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;