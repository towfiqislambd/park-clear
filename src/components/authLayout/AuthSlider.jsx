import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AuthSlider = ({ items }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {items?.map((item) => (
        <SwiperSlide key={item?.id}>
          <img className="w-full h-screen" src={item?.image} alt="image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AuthSlider;
