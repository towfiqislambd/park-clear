const SubscriptionTypeCard = ({item}) => {
  return (
    <div className="subscription-type-card mt-4 relative" data-aos="fade-up">
      <input
        type="radio"
        id={`item-${item?.id}`}
        name="subscription-type"
        className="hidden"
      />
      <label htmlFor={`item-${item?.id}`} className="p-8 border-[2px] border-default-border rounded-[16px] block cursor-pointer duration-200 ease-in-out">
        <h3 className="text-[48px] font-black">
          <span className="text-[24px] font-semibold">£</span>{item?.price} <span className="text-[24px] font-semibold">/mo</span>
        </h3>
        <p className="text-[24px] font-semibold mt-6">{item?.name}</p>
        <p className="absolute top-8 right-0 py-5 px-8 bg-theme-orange text-white font-semibold capitalize w-[211px] rounded-tl-[16px] rounded-bl-[16px]">{item?.type}</p>
      </label>
    </div>
  );
};

export default SubscriptionTypeCard;
