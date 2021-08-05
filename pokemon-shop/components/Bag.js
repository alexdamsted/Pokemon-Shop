const Bag = ({ isCartClicked }) => {
  return (
    <div
      className={
        isCartClicked
          ? "bg-gray-500 h-full w-1/5 fixed top-0 right-0 z-50 pt-96 overflow-x-hidden transition duration-150"
          : "hidden"
      }
    ></div>
  );
};

export default Bag;
