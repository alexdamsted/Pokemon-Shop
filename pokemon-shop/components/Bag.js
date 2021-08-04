const Bag = ({ isCartClicked }) => {
  return (
    <div className={isCartClicked ? "flex z-50 pt-96" : "hidden"}>
      <p>Hi there</p>
    </div>
  );
};

export default Bag;
