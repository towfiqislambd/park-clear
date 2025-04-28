import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { LuKeyRound, LuUserRound } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import AuthBackButton from "../../components/authLayout/AuthBackButton";
import AuthTitle from "../../components/authLayout/AuthTitle";

const SignupPage = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-end w-full mb-[90px]">
        <AuthBackButton />
      </div>
      <AuthTitle
        title="Create Account"
        description="Please fill your information below"
      />
      <div className="mt-10">
        {/* auth-input-box  */}
        <div className="auth-input-box">
          <div className="inner">
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Name"
              {...register("name", { required: "Please enter your name." })}
              className="auth-input"
            />
            <p className="placeholder-icon text-[20px]">
              <LuUserRound />
            </p>
          </div>
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>
        {/* auth-input-box  */}
        <div className="auth-input-box">
          <div className="inner">
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              {...register("phone", { required: "Please enter your phone." })}
              className="auth-input"
            />
            <p className="placeholder-icon text-[20px]">
              <FaPhone />
            </p>
          </div>
          {errors.phone && (
            <p className="error-message">{errors.phone.message}</p>
          )}
        </div>
        {/* auth-input-box  */}
        <div className="auth-input-box">
          <div className="inner">
            <input
              type="address"
              id="address"
              name="address"
              placeholder="Address"
              {...register("address", {
                required: "Please enter your address.",
              })}
              className="auth-input"
            />
            <p className="placeholder-icon text-[20px]">
              <CiLocationOn />
            </p>
          </div>
          {errors.address && (
            <p className="error-message">{errors.address.message}</p>
          )}
        </div>
        {/* auth-input-box  */}
        <div className="auth-input-box">
          <div className="inner">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: "Please enter your email." })}
              className="auth-input"
            />
            <p className="placeholder-icon text-[20px]">
              <MdOutlineEmail />
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
              type={passwordShow ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Please enter your password.",
              })}
              className="auth-input"
            />
            <p className="placeholder-icon text-[20px]">
              <LuKeyRound />
            </p>
            <p
              className="eye-icon cursor-pointer"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? <FaRegEyeSlash /> : <FaRegEye />}
            </p>
          </div>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        {/* auth-input-box  */}
        <div className="auth-input-box">
          <div className="inner">
            <input
              type={confirmPasswordShow ? "text" : "password"}
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password"
              {...register("confirm_password", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="auth-input"
            />
            <p className="placeholder-icon text-[20px]">
              <LuKeyRound />
            </p>
            <p
              className="eye-icon cursor-pointer"
              onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}
            >
              {confirmPasswordShow ? <FaRegEyeSlash /> : <FaRegEye />}
            </p>
          </div>
          {errors.confirm_password && (
            <p className="error-message">{errors.confirm_password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="py-4 px-10 bg-theme-orange rounded-[8px] text-white hover:bg-transparent hover:text-theme-orange w-fit ml-auto mt-12 duration-200 ease-in-out border-[2px] border-theme-orange block font-semibold"
        >
          Signup
        </button>
        {/* register  */}
        <div className="pt-10 mt-10 border-t border-default-border flex items-center justify-between">
          <p>Already have an account ?</p>
          <Link to={"/auth/login"} className="text-theme-orange font-semibold">
            Log In Now
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignupPage;
