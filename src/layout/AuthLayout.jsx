
import { Outlet } from "react-router-dom";
import AuthSlider from "../components/authLayout/AuthSlider";

const items = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/CgskVHN/auth-Layout.png'
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/x8mDpy1D/pexels-rickyrecap-2226607.jpg'
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/s9TDxM6X/pexels-hngstrm-1187313.jpg'
  },
  {
    id: 4,
    image: 'https://i.ibb.co.com/fY0h5mGj/pexels-joshsorenson-103601.jpg'
  },
]

const AuthLayout = () => {
  return (
    <div className="flex items-center">
      <div className="hidden xl:block xl:w-[45%] 2xl:w-[40%] h-screen auth-slider relative">
        <AuthSlider items={items} />
      </div>
      <div className="w-full md:w-[500px] xl:w-[55%] 2xl:w-[60%] xl:max-h-screen xl:overflow-y-auto mx-auto px-5 xl:px-20 2xl:px-[150px] 3xl:px-[220px] 4xl:px-[300px] py-12 4xl:py-[100px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
