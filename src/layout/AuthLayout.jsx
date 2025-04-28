
import { Outlet } from "react-router-dom";
import AuthSlider from "../components/authLayout/AuthSlider";

const items = [
    {
        id:1,
        image:'https://i.ibb.co.com/CgskVHN/auth-Layout.png'
    },
    {
        id:2,
        image:'https://i.ibb.co.com/x8mDpy1D/pexels-rickyrecap-2226607.jpg'
    },
    {
        id:3,
        image:'https://i.ibb.co.com/s9TDxM6X/pexels-hngstrm-1187313.jpg'
    },
    {
        id:4,
        image:'https://i.ibb.co.com/fY0h5mGj/pexels-joshsorenson-103601.jpg'
    },
]

const AuthLayout = () => {
  return (
    <div className="flex items-start">
      <div className="w-[40%] h-screen auth-slider relative">
        <AuthSlider items={items} />
      </div>
      <div className="w-[70%] max-h-screen overflow-y-auto px-[300px] py-[120px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
