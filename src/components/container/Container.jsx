const Container = ({ children }) => {
  return (
    <div className="max-w-[1700px] px-5 md:px-6 mx-auto">
      {children}
    </div>
  );
};

export default Container;