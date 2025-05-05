import { useForm } from "react-hook-form";
import { MdOutlineMail } from "react-icons/md";
import AuthTitle from "../../components/authLayout/AuthTitle";
import AuthBackButton from "../../components/authLayout/AuthBackButton";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/auth/verify-otp')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Back btn */}
            <div className="flex items-center justify-end w-full mb-[90px]">
                <AuthBackButton />
            </div>
            <AuthTitle
                title="Verify Your Account"
                description="Please fill your information below"
            />
            <div className="mt-5 md:mt-7 2xl:mt-10">
                {/* Email  */}
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
                <button
                    type="submit"
                    className="py-2 md:py-2.5 2xl:py-4 px-7 2xl:px-10 bg-theme-orange rounded-[8px] text-white hover:bg-transparent hover:text-theme-orange w-full md:w-fit ml-auto mt-6 md:mt-12 duration-200 ease-in-out border-[2px] border-theme-orange block font-medium md:font-semibold"
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default ForgetPassword;
