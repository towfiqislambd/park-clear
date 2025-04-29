const TitleCommon = ({ subTitle, paragraph, children }) => {
  return (
    <div className="text-center">
      <p className="title--sm" data-aos="fade-up">{subTitle}</p>
      {children}
      <p className="text-black w-[670px] mx-auto mt-5" data-aos="fade-up" data-aos-delay="200">{paragraph}</p>
    </div>
  );
};

export default TitleCommon;
