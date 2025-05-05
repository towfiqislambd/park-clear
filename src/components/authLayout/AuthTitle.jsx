const AuthTitle = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-[28px] 2xl:text-[32px] font-bold mb-1">{title}</h1>
      <p className="text-text-gray">{description}</p>
    </div>
  );
};

export default AuthTitle;
