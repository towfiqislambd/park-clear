import DashboardHeader from "../../common/DashboardHeader";
import payment from "../../../assets/images/payment.png";
import { StripeSvg } from "../../svg-container/SvgContainer";

const ProceedWithParkClear = () => {
    return (
        <div>
            <DashboardHeader title='Appeal Management' />
            <div className="grid grid-cols-12 mt-10 max-w-[1550px]">

                {/* Left Side */}
                <div className="col-span-6">
                    <p className="text-text-gray font-semibold text-xl mb-2">Secure and Transparent Transactions</p>
                    <h3 className="font-bold text-6xl text-theme-orange mb-7">Payment</h3>
                    <p className="font-medium text-text-gray leading-[24px] mb-22">Our payment page ensures that all transactions are conducted securely and transparently. We provide detailed information on payment methods, processing times, and any associated fees to guarantee a smooth and trustworthy payment experience for our users.</p>
                    <img src={payment} alt="" className="ml-20" />
                </div>
                <div className="col-span-1"></div>

                {/* Right Side */}
                <div className="col-span-5">
                    <div className="p-10 rounded-lg border border-default-border bg-white grid grid-cols-3 gap-x-5 gap-y-10 mb-5">
                        <div className="">
                            <h3 className='text-dashboard-common-heading text-lg font-semibold mb-1'>Issue Date:</h3>
                            <p className='text-dashboard-common-heading text-sm'>Data</p>
                        </div>
                        <div className="">
                            <h3 className='text-dashboard-common-heading text-lg font-semibold mb-1'>PCN No:</h3>
                            <p className='text-dashboard-common-heading text-sm'>Data</p>
                        </div>
                        <div className="">
                            <h3 className='text-dashboard-common-heading text-lg font-semibold mb-1'>Location:</h3>
                            <p className='text-dashboard-common-heading text-sm'>Data</p>
                        </div>
                        <div className="">
                            <h3 className='text-dashboard-common-heading text-lg font-semibold mb-1'>Last Date:</h3>
                            <p className='text-dashboard-common-heading text-sm'>Data</p>
                        </div>
                        <div className="">
                            <h3 className='text-dashboard-common-heading text-lg font-semibold mb-1'>Car Model:</h3>
                            <p className='text-dashboard-common-heading text-sm'>Data</p>
                        </div>
                    </div>

                    <div className="p-10 mb-20 rounded-lg border border-default-border bg-white">
                        <h3 className='text-[22px] mb-2 font-semibold text-dashboard-common-heading'>Total amount</h3>
                        <h2 className='font-bold text-theme-orange text-4xl'>$3.99</h2>
                    </div>
                    <h2 className="text-dashboard-common-heading font-bold text-4xl mb-7">Payment Method</h2>

                    {/* Btns */}
                    <div className="space-y-5 mb-7">
                        <button className='h-[70px] border border-default-border font-semibold text-lg w-full block rounded-lg cursor-pointer flex gap-2 justify-center items-center'>
                            <StripeSvg />
                            <span>Continue With Stripe</span>
                        </button>
                    </div>

                    {/* Terms and conditions */}
                    <p className="">By proceeding, you acknowledge and automatically agree to our Terms and Conditions. For more details, <span className="text-theme-orange">please review our terms here.</span></p>
                </div>
            </div>
        </div>
    );
};

export default ProceedWithParkClear;