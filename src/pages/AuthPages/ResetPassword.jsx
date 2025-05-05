import { useForm } from "react-hook-form";
import AuthTitle from "../../components/authLayout/AuthTitle";
import AuthBackButton from "../../components/authLayout/AuthBackButton";
import { useState } from "react";
import { LuKeyRound } from "react-icons/lu";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const ResetPassword = () => {
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
            {/* Back btn */}
            <div className="flex items-center justify-end w-full mb-[90px]">
                <AuthBackButton />
            </div>
            <AuthTitle
                title="Reset Your Password"
                description="Please fill your information below"
            />

            <div className="mt-5 md:mt-7 2xl:mt-10">
                {/* Password  */}
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
                {/* Confirm Password  */}
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
                    className="py-2 md:py-2.5 2xl:py-4 px-7 2xl:px-10 bg-theme-orange rounded-[8px] text-white hover:bg-transparent hover:text-theme-orange w-full md:w-fit ml-auto mt-6 md:mt-12 duration-200 ease-in-out border-[2px] border-theme-orange block font-medium md:font-semibold"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ResetPassword;
