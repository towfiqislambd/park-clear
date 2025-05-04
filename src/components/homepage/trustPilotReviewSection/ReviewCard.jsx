import { ImQuotesLeft } from "react-icons/im";

const ReviewCard = ({ item }) => {
  return (
    <div className='p-5 3xl:p-8 rounded-[16px] border border-default-border bg-plan-card'>
      <p className="text-[30px] md:text-[40px] 3xl:text-[60px] text-theme-orange"><ImQuotesLeft /></p>
      <p className="text-sm mt-3 md:mt-5 2xl:mt-8">{item?.testimonial}</p>
      <img className="w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 3xl:h-[240px] 2xl:h-[120px] 3xl:w-[240px] mx-auto my-[19px]" src={item?.image} alt={item?.name} />
      <div className="flex items-center gap-4">
        <img className="h-12 w-12 rounded-full object-cover" src={item?.avatar} alt={item?.name} />
        <div>
          <h4 className="text-lg md:text-xl 3xl:text-[24px] font-semibold md:mb-1 capitalize">{item?.name}</h4>
          <p className="text-[12px] capitalize">{item?.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;