const ParkClearPlanner = () => {
  const data = [
    { id: 1, title: 'Full TicketTracker Dashboard', description: 'We know how stressful it can be when PCNs increase. Stay on top of parking tickets and appeals, we’ll remind you when your deadlines are to pay in our smart new dashboard.' },
    { id: 2, title: 'Full TicketTracker Dashboard', description: 'We know how stressful it can be when PCNs increase. Stay on top of parking tickets and appeals, we’ll remind you when your deadlines are to pay in our smart new dashboard.' },
    { id: 3, title: 'Full TicketTracker Dashboard', description: 'We know how stressful it can be when PCNs increase. Stay on top of parking tickets and appeals, we’ll remind you when your deadlines are to pay in our smart new dashboard.' },
    { id: 4, title: 'Full TicketTracker Dashboard', description: 'We know how stressful it can be when PCNs increase. Stay on top of parking tickets and appeals, we’ll remind you when your deadlines are to pay in our smart new dashboard.' },
  ]

  return (
    <div className="px-7 sm:px-10 py-5 sm:py-7 md:p-[40px] 3xl:p-[70px] bg-white border border-default-border rounded-[16px]" data-aos="fade-in" data-aos-delay="100">
      <h4 className="text-lg sm:text-xl md:text-2xl 3xl:text-[32px] font-semibold text-black mb-5 3xl:mb-9">
        What can <span className="text-theme-orange">ParkClear Planner</span> offer you ?
      </h4>
      <ul>
        {
          data?.map((item) => (
            <li key={item?.id} className="list-disc mt-5">
              <p className="font-semibold sm:font-bold text-menu-color">{item?.title}</p>
              <p className="text-sm md:text-base">{item?.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ParkClearPlanner;
