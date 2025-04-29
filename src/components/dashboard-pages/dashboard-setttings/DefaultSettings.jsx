import DashboardHeader from "@/components/common/DashboardHeader";
import profile_img from "../../../assets/images/profile_Img.png";
import { ChangePassSvg, DarkModeSvg, DeleteSvg, DesktopSvg, LightModeSvg, LogoutSvg, NotificationSvg, PrivacySvg, RightArrowSvg, TermsSvg } from "@/components/svg-container/SvgContainer";
import { Switch } from "@/components/ui/switch";

const DefaultSettings = ({ setChangePassword, setEditProfile }) => {
    return (
        <section>
            <DashboardHeader title='Settings' />

            {/* Profile Overview */}
            <div className="flex justify-between items-end px-5 py-4 mt-5 mb-10 rounded-xl bg-white border border-default-border">
                {/* Left */}
                <div className="flex gap-5">
                    <figure className="w-[190px] h-[180px] rounded-lg">
                        <img src={profile_img} alt="profile_img" className="w-full h-full object-cover rounded-lg" />
                    </figure>
                    <div className="">
                        <h3 className="font-medium text-dashboard-common-heading text-2xl mb-3">Musfiq</h3>
                        <p className="ext-dashboard-common-heading mb-1">Mail: email@mail.com</p>
                        <p className="ext-dashboard-common-heading mb-7">Phone:+923787248724872</p>
                        <button onClick={() => setEditProfile(true)} className="border border-theme-orange rounded-[6px] cursor-pointer hover:bg-theme-orange hover:text-white duration-300 transition-all py-3 px-5 text-theme-orange font-medium">Edit Profile</button>
                    </div>
                </div>
                {/* Right */}
                <button className="px-10 py-3 rounded-[6px] text-white cursor-pointer bg-theme-orange">Instalment</button>
            </div>

            <div className="grid grid-cols-2 gap-5">
                {/* Appearance */}
                <div>
                    <h3 className="text-2xl mb-5 text-dashboard-common-heading font-medium">Appearance</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border rounded p-7 rounded-lg border-default-border bg-white">
                            <div className="flex gap-3 items-center">
                                <DesktopSvg />
                                <span className="text-dashboard-common-heading">System Default</span>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex justify-between items-center border rounded p-7 rounded-lg border-default-border bg-white">
                            <div className="flex gap-3 items-center">
                                <LightModeSvg />
                                <span className="text-dashboard-common-heading">Light Mode</span>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex justify-between items-center border rounded p-7 rounded-lg border-default-border bg-white">
                            <div className="flex gap-3 items-center">
                                <DarkModeSvg />
                                <span className="text-dashboard-common-heading">Dark Mode</span>
                            </div>
                            <Switch />
                        </div>
                    </div>
                </div>

                {/* Subscription Plan  */}
                <div>
                    <h3 className="text-2xl mb-5 text-dashboard-common-heading font-medium">Subscription Plan </h3>

                    <div className='border p-11 rounded-lg relative cursor-pointer transition-all duration-300  border-default-border bg-white'>
                        <h3 className="font-bold text-4xl mb-4">
                            £26.99<span className="text-sm">/yr</span>
                        </h3>
                        <p className="text-lg font-semibold mb-20">ParkClear Pro Driver  </p>
                        <p className="bg-theme-orange text-white py-3 ps-5 rounded-l-lg pr-16 absolute top-5 right-0">
                            Pro
                        </p>
                        <div className="flex gap-7 items-center justify-end">
                            <p className="text-sidebar-card-headingOne font-medium">Change Plan</p>
                            <p className="text-theme-orange font-medium">Cancel The Subscription</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-7">
                {/* Security  */}
                <div>
                    <h3 className="text-2xl mb-5 text-dashboard-common-heading font-medium">Security </h3>
                    <div onClick={() => setChangePassword(true)} className="flex justify-between items-center border cursor-pointer rounded p-7 rounded-lg border-default-border bg-white">
                        <div className="flex gap-3 items-center">
                            <ChangePassSvg />
                            <span className="text-dashboard-common-heading">Change Password</span>
                        </div>
                        <RightArrowSvg />
                    </div>
                </div>

                {/* Notification  */}
                <div>
                    <h3 className="text-2xl mb-5 text-dashboard-common-heading font-medium">Notification </h3>
                    <div className="flex justify-between items-center border rounded p-7 rounded-lg border-default-border bg-white">
                        <div className="flex gap-3 items-center">
                            <NotificationSvg />
                            <span className="text-dashboard-common-heading">Allow  Aleart message</span>
                        </div>
                        <Switch />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-7">
                {/* Our Policies */}
                <div>
                    <h3 className="text-2xl mb-5 text-dashboard-common-heading font-medium">Our Policies </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border rounded p-7 rounded-lg border-default-border bg-white">
                            <div className="flex gap-3 items-center">
                                <PrivacySvg />
                                <span className="text-dashboard-common-heading">Privacy Policies</span>
                            </div>
                            <RightArrowSvg />
                        </div>
                        <div className="flex justify-between items-center border rounded p-7 rounded-lg border-default-border bg-white">
                            <div className="flex gap-3 items-center">
                                <TermsSvg />
                                <span className="text-dashboard-common-heading">Terms & Conditions</span>
                            </div>
                            <RightArrowSvg />
                        </div>
                    </div>
                </div>

                {/* Account   */}
                <div>
                    <h3 className="text-2xl mb-5 text-dashboard-common-heading font-medium">Account </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border rounded p-7 rounded-lg border-default-border bg-white">
                            <div className="flex gap-3 items-center">
                                <LogoutSvg />
                                <span className="text-red-500">Log Out</span>
                            </div>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-[6px] font-medium">Log Out</button>
                        </div>
                        <div className="flex justify-between items-center border rounded p-7 rounded-lg border-default-border bg-white">
                            <div className="flex gap-3 items-center">
                                <DeleteSvg />
                                <span className="text-red-500">Delete Account</span>
                            </div>
                            <button className="px-5 py-2 bg-red-500 text-white rounded-[6px] font-medium">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DefaultSettings;