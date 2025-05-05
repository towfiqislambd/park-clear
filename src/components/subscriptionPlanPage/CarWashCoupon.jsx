import Container from "../container/Container";
import { GoCheckSvg } from "../svg-container/SvgContainer";

const CarWashCoupon = () => {
    return (
        <section data-aos="fade-up" data-aos-delay="100">
            <Container>
                <div className="p-8 md:p-12 border border-default-border bg-[#FAFBFC] rounded-[8px] text-center">
                    <p
                        className="w-[50px] h-[50px] md:h-[64px] md:w-[64px] flex items-center justify-center bg-dashboard-status rounded-full text-[30px] text-white mx-auto"
                        data-aos="zoom-out"
                    >
                        <GoCheckSvg />
                    </p>
                    <div className="max-w-[350px] mx-auto">
                        <h4
                            className="title--sm !text-menu-color mt-3 md:mt-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Car Screen Wash Coupon
                        </h4>
                        <p
                            className="text-sm mt-4 text-text-gray"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            If you subscribe today you will get a free 5L of car screen wash{" "}
                        </p>
                        <h4 className="text-sidebar-card-headingOne text-xl lg:text-2xl font-bold mt-2 lg:mt-3 mb-2.5">
                            12:54:00
                        </h4>
                        <p className="text-sidebar-card-headingTwo text-xl lg:text-2xl font-bold">
                            Activated
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CarWashCoupon;
