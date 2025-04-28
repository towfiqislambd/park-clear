import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AuthBackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center gap-2 text-theme-orange font-semibold cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <span>
        <IoArrowBack />
      </span>
      Go Back
    </div>
  );
};

export default AuthBackButton;
