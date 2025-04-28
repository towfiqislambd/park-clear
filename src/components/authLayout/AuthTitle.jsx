const AuthTitle = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-[32px] font-black mb-2">{title}</h1>
      <p className="text-text-gray">{description}</p>
    </div>
  );
};

export default AuthTitle;
