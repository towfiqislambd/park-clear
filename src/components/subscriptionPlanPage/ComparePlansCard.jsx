const ComparePlansCard = ({ data }) => {
  return (
    <div className="w-[20%] border-r border-default-border">
      {/* plan-header  */}
      <div className="plan-header">
        <h3 className="text-xl 3xl:text-[24px] font-semibold mb-3">{data?.title}</h3>
        <p className="text-sm text-text-gray">{data?.description}</p>
      </div>
      {/* features list  */}
      <ul>
        {
          data?.features?.map((feature) => (
            <li key={feature?.id} className="py-5 px-5 3xl:px-8 border-b first:border-t last:border-none border-default-border text-[15px] min-h-20 max-h-20 flex items-center">{feature?.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default ComparePlansCard;
