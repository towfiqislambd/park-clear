import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './custom-style.css'

const AosProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
      offset: 0,
    });
  }, []);
  return <div>{children}</div>;
};

export default AosProvider;
