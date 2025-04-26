const ParkClearPlanner = () => {
    const data=[
        {id:1, title:'Full TicketTracker Dashboard', description:'We know how stressful it can be when PCNs increase. Stay on top of parking tickets and appeals, we’ll remind you when your deadlines are to pay in our smart new dashboard.'},
        {id:2, title:'Full TicketTracker Dashboard', description:'We know how stressful it can be when PCNs increase. Stay on top of parking tickets and appeals, we’ll remind you when your deadlines are to pay in our smart new dashboard.'},
        {id:3, title:'Full TicketTracker Dashboard', description:'We know how stressful it can be when PCNs increase. Stay on top of parking tickets and appeals, we’ll remind you when your deadlines are to pay in our smart new dashboard.'},
        {id:4, title:'Full TicketTracker Dashboard', description:'We know how stressful it can be when PCNs increase. Stay on top of parking tickets and appeals, we’ll remind you when your deadlines are to pay in our smart new dashboard.'},
        
    ]
  return (
    <div className="p-[70px] bg-white border border-default-border rounded-[16px]">
      <h4 className="text-[32px] font-semibold text-black mb-9">
        What can <span className="text-theme-orange">ParkClear Planner</span> offer you ?
      </h4>
      <ul>
        {
            data?.map((item) => (
                <li key={item?.id} className="list-disc mt-1">
                    <p className="font-bold text-menu-color">{item?.title}</p>
                    <p>{item?.description}</p>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default ParkClearPlanner;
