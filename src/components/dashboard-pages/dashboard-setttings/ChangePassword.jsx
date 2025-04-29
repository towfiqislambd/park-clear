import { LeftSvg, LockSvg } from "@/components/svg-container/SvgContainer";

const ChangePassword = ({ setChangePassword }) => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="border w-[544px] mx-auto ">
                <button
                    onClick={() => setChangePassword(false)}
                    className="flex gap-2 mb-10 items-center">
                    <LeftSvg />
                    <span className="text-theme-orange font-medium">Go Back</span>
                </button>
                <h3 className="text-3xl font-bold mb-2">Change Password</h3>
                <p className="text-text-gray mb-7">Please fill your information below</p>

                <div className="space-y-3">
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Current Password"
                            className="block w-full pl-12 pr-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white"
                        />
                        <div className="absolute left-3 top-4"><LockSvg /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;