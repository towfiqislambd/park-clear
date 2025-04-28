import { useRef } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testiImg from "../../../assets/images/human-rating.png";
import ReviewCard from "./ReviewCard";

const testimonialsData = [
  {
    id: 1,
    name: "John Smith",
    designation: "CEO of XYZ group",
    testimonial:
      "Absolutely love this app! It makes managing parking tickets so easy—tracking, appealing, and staying on top of deadlines has never been simpler. A must-have for any driver!",
    rating: 5,
    score: 820,
    avatar: "https://i.ibb.co.com/RGfC9Bf7/notification-profile.png",
    image: testiImg,
  },
  {
    id: 2,
    name: "John Smith",
    designation: "CEO of XYZ group",
    testimonial:
      "Absolutely love this app! It makes managing parking tickets so easy—tracking, appealing, and staying on top of deadlines has never been simpler. A must-have for any driver!",
    rating: 5,
    score: 820,
    avatar: "https://i.ibb.co.com/LJ5W3n8/DMKromer.png",
    image: testiImg,
  },
  {
    id: 3,
    name: "John Smith",
    designation: "CEO of XYZ group",
    testimonial:
      "Absolutely love this app! It makes managing parking tickets so easy—tracking, appealing, and staying on top of deadlines has never been simpler. A must-have for any driver!",
    rating: 5,
    score: 820,
    avatar: "https://i.ibb.co.com/RGfC9Bf7/notification-profile.png",
    image: testiImg,
  },
  {
    id: 4,
    name: "John Smith",
    designation: "CEO of XYZ group",
    testimonial:
      "Absolutely love this app! It makes managing parking tickets so easy—tracking, appealing, and staying on top of deadlines has never been simpler. A must-have for any driver!",
    rating: 5,
    score: 820,
    avatar: "https://i.ibb.co.com/LJ5W3n8/DMKromer.png",
    image: testiImg,
  },
];

const TrustPilotReviewSlider = () => {
  const swiperRef = useRef(null);
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={24}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
        {testimonialsData?.map((item) => (
          <SwiperSlide key={item?.id}>
            <ReviewCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* pagination */}
      <div className="flex items-center gap-4 justify-end mt-6">
        <button onClick={goToPrevSlide} className="slider-btn">
          <IoMdArrowDropleft />
        </button>
        <button onClick={goToNextSlide} className="slider-btn">
          <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
};

export default TrustPilotReviewSlider;
