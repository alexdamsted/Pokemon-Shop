const BagItemsSummary = () => {
  return (
    <div className="flex justify-between border border-black px-6 py-4">
      <div className="">
        <p className="py-1">Item amount</p>
        <p className="py-1">Shipping cost</p>
        <p className="py-1">Total price</p>
      </div>
      <div className="">
        <p className="py-1">2</p>
        <p className="py-1">2</p>
        <p className="py-1">2</p>
      </div>
    </div>
  );
};

export default BagItemsSummary;
