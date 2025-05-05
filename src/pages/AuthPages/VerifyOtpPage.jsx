import { Controller, useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import AuthBackButton from "../../components/authLayout/AuthBackButton";
import AuthTitle from "../../components/authLayout/AuthTitle";
import CountdownTimer from "../../components/common/CountdownTimer";

const VerifyOtpPage = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/auth/reset-password')
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-end w-full mb-[90px]">
        <AuthBackButton />
      </div>
      <AuthTitle
        title="Enter OTP Code"
        description="Please enter OTP Code you received in your mobile"
      />
      <div className="mt-10">
        <div>
          <Controller
            name="otp"
            control={control}
            rules={{
              required: "OTP is required",
              minLength: { value: 4, message: "OTP must be 4 digits" },
            }}
            render={({ field }) => (
              <OtpInput
                {...field}
                value={field.value}
                onChange={field.onChange}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
                containerStyle={'flex items-center gap-6'}
                inputStyle={`h-[75px] !w-[75px] border !bg-plan-card border-default-border rounded-[8px]`}
              />
            )}
          />
          {errors.otp && <p className="error-message">{errors.otp.message}</p>}
        </div>
        <button
          type="submit"
          className="py-4 px-10 bg-theme-orange rounded-[8px] text-white hover:bg-transparent hover:text-theme-orange w-fit ml-auto mt-12 duration-200 ease-in-out border-[2px] border-theme-orange block font-semibold cursor-pointer"
        >
          Verify
        </button>
        {/* Re-send OTP  */}
        <div className="pt-10 mt-10 border-t border-default-border flex items-center justify-between">
          <p>Re-send OTP</p>
          <CountdownTimer />
        </div>
      </div>
    </form>
  );
};

export default VerifyOtpPage;
