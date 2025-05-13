import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = ({ isOpen }) => {
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
        visible && (<button className={`fixed bottom-6 md:bottom-10 xl:bottom-20 right-6 md:right-[40px] xl:right-[60px] bg-theme-orange size-[40px] lg:size-[50px] xl:w-[60px] xl:h-[60px] rounded-full flex items-center justify-center text-white text-[24px] cursor-pointer ${!isOpen && 'z-[40]'}`} onClick={scrollToTop}><IoIosArrowUp /></button>)
      }
    </>
  );
};

export default BackToTop;
