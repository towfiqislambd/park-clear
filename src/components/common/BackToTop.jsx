import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {
        visible && (<button className="fixed bottom-20 right-[60px] bg-theme-orange w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-[24px] z-[40] cursor-pointer" onClick={scrollToTop}><IoIosArrowUp /></button>)
      }
    </>
  );
};

export default BackToTop;
