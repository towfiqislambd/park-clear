import AuthBackButton from "../../components/authLayout/AuthBackButton";
import AuthTitle from "../../components/authLayout/AuthTitle";

const TermsPage = () => {
  return (
    <div>
      {/* Back btn */}
      <div className="flex items-center justify-end w-full mb-12 4xl:mb-16">
        <AuthBackButton />
      </div>
      <AuthTitle
        title="Term & Conditions "
        description="Please review our terms and conditions to understand your rights, responsibilities, and usage guidelines"
      />

      <p className="mt-7 2xl:mt-10">
        By using ParkClear, you agree to use the platform responsibly and ensure
        all information provided is accurate. Access to certain features may
        require a subscription, and we reserve the right to update or modify
        services at any time. Your data is handled in accordance with our
        privacy policy, and continued use of the service implies acceptance of
        these terms.
      </p>
      <div className="mt-10">
        {/* Submit btn */}
        <button
          type="button"
          className="py-2.5 2xl:py-4 px-7 2xl:px-10 bg-theme-orange rounded-[8px] text-white hover:bg-transparent hover:text-theme-orange w-fit ml-auto mt-12 duration-200 ease-in-out border-[2px] border-theme-orange block font-semibold cursor-pointer"
        >
          Agreed
        </button>
      </div>
    </div>
  );
};

export default TermsPage;
