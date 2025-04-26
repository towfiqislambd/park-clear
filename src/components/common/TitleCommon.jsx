const TitleCommon = ({ subTitle, paragraph, children }) => {
  return (
    <div className="text-center">
      <p className="title--sm">{subTitle}</p>
      {children}
      <p className="text-black w-[670px] mx-auto mt-6">{paragraph}</p>
    </div>
  );
};

export default TitleCommon;
