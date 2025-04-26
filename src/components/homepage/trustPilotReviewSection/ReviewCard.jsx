import { ImQuotesLeft } from "react-icons/im";


const ReviewCard = ({item}) => {
  return (
    <div className='p-8 rounded-[16px] border border-default-border bg-plan-card'>
      <p className="text-[60px] text-theme-orange"><ImQuotesLeft /></p>
      <p className="text-sm mt-8">{item?.testimonial}</p>
      <img className="h-[240px] w-[240px] mx-auto my-[19px]" src={item?.image} alt={item?.name} />
      <div className="flex items-center gap-4">
        <img className="h-12 w-12 rounded-full object-cover" src={item?.avatar} alt={item?.name} />
        <div>
            <h4 className="text-[24px] font-semibold mb-1 capitalize">{item?.name}</h4>
            <p className="text-[12px] capitalize">{item?.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;