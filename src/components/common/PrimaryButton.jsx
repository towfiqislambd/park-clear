import { Link } from "react-router-dom";

const PrimaryButton = ({ text, icon, className, pathname }) => {
  return (
    <Link
      to={pathname}
      className={`text-sm sm:text-base 3xl:text-[18px] py-2 sm:py-2.5 3xl:py-3 px-3 3xl:px-6 rounded-[8px] flex items-center gap-2 font-medium border-[2px] duration-200 ease-in-out ${className}`}
    >
      {text} <span className="rotate-[-40deg]">{icon}</span>
    </Link>
  );
};

export default PrimaryButton;
