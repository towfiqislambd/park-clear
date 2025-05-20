const ParkClearPlanner = () => {
  const data = [
    {
      id: 1,
      title: "TickeTracker",
      description:
        " Scan or upload your fines — we’ll organise them, remind you to act, and help you pay on time before penalties increase.",
    },
    {
      id: 2,
      title: "Appeals, Made Simple",
      description:
        "No legal jargon. Tell us your side and our AI will write and submit your parking fine appeal for you.",
    },
    {
      id: 3,
      title: "MyVehicleHealth",
      description:
        "Track your car’s maintenance, get smart reminders, and avoid surprise repair costs or garage overcharging.",
    },
    {
      id: 4,
      title: "New Car Checker",
      description:
        "Buying a car? Enter the registration to see everything you need to know — before you commit.",
    },
    {
      id: 5,
      title: "Insurance Reminders",
      description:
        "We’ll remind you when it’s time to renew and help you find one of the most competitive car insurance deals on the market.",
    },
  ];

  return (
    <div
      className="px-7 sm:px-10 py-5 sm:py-7 md:p-[40px] 3xl:p-[50px] bg-white border border-default-border rounded-[16px]"
      data-aos="fade-in"
      data-aos-delay="100"
    >
      <h4 className="text-lg sm:text-xl font-semibold text-black mb-5 3xl:mb-9">
        Our FREE ParkClear Planner uses AI to simplify driving admin For You.
        Register for access to:
      </h4>
      <ul>
        {data?.map(item => (
          <li key={item?.id} className="list-disc mt-5">
            <p className="font-semibold sm:font-bold text-menu-color">
              {item?.title}
            </p>
            <p className="text-sm md:text-base">{item?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkClearPlanner;
