import { useForm } from "react-hook-form";
import { LuKeyRound } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import AuthTitle from "../../components/authLayout/AuthTitle";
import AuthBackButton from "../../components/authLayout/AuthBackButton";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const navigate = useNavigate()
  const [passwordShow, setPasswordShow] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/auth/terms-condition')
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-end w-full mb-[90px]">
        <AuthBackButton />
      </div>
      <AuthTitle
        title="Log In"
        description="Please fill your information below"
      />
      <div className="mt-10">
        {/* auth-input-box  */}
        <div className="auth-input-box">
          <div className="inner">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              {...register("email", { required: "Please enter your email." })}
              className="auth-input"
            />
            <p className="placeholder-icon text-[20px]">
              <MdOutlineMail />
            </p>
          </div>
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        {/* auth-input-box  */}
        <div className="auth-input-box">
          <div className="inner">
            <input
              type={passwordShow ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Please enter your email.",
              })}
              className="auth-input"
            />
            <p className="placeholder-icon text-[20px]">
              <LuKeyRound />
            </p>
            <p className="eye-icon cursor-pointer" onClick={() => setPasswordShow(!passwordShow)}>
              {
                passwordShow ? <FaRegEyeSlash /> : <FaRegEye />
              }
            </p>
          </div>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <Link
          to='/auth/forgot-password'
          className="text-semibold text-theme-orange mt-4 inline-block font-semibold"
        >
          Forget Password ?
        </Link>
        <button
          type="submit"
          className="py-4 px-10 bg-theme-orange rounded-[8px] text-white hover:bg-transparent hover:text-theme-orange w-fit ml-auto mt-12 duration-200 ease-in-out border-[2px] border-theme-orange block font-semibold"
        >
          Login
        </button>
        {/* register  */}
        <div className="pt-10 mt-10 border-t border-default-border flex items-center justify-between">
          <p>Don’t have an account ?</p>
          <Link to={"/auth/signup"} className="text-theme-orange font-semibold">
            Register Now
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
