const SubscriptionTypeCard = ({ item }) => {
  return (
    <div className="subscription-type-card mt-4 relative" data-aos="fade-up">
      <input
        type="radio"
        id={`item-${item?.id}`}
        name="subscription-type"
        className="hidden"
      />
      <label htmlFor={`item-${item?.id}`} className="p-4 3xl:p-8 border-[2px] border-default-border rounded-[16px] block cursor-pointer duration-200 ease-in-out">
        <h3 className="text-2xl md:text-[32px] 3xl:text-[48px] font-black">
          <span className="text-xl md:text-[24px] font-semibold">£</span>{item?.price} <span className="text-lg md:text-xl 3xl:text-[24px] font-semibold">/mo</span>
        </h3>
        <p className="text-lg md:text-xl 3xl:text-[24px] font-semibold mt-2 md:mt-3 3xl:mt-6">{item?.name}</p>
        <p className="absolute top-4 md:top-8 right-0 py-2 md:py-3 3xl:py-5 px-4 md:px-6 3xl:px-8 bg-theme-orange text-white font-semibold capitalize 3xl:w-[211px] rounded-tl-[10px]  rounded-bl-[10px] md:rounded-bl-[16px] md:rounded-bl-[16px]">{item?.type}</p>
      </label>
    </div>
  );
};

export default SubscriptionTypeCard;
