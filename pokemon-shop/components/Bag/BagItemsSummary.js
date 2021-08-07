const BagItemsSummary = ({ getTotalPrice, getTotalItems }) => {
  return (
    <div className="flex justify-between text-sm border border-black px-6 py-4 mb-6">
      <div className="">
        <p className="py-1 font-light">Items</p>
        <p className="py-1 font-light">Shipping</p>
        <p className="py-1 font-bold">Total</p>
      </div>
      <div className="">
        <p className="py-1 font-light">{getTotalItems()}</p>
        <p className="py-1 font-light">FREE</p>
        <p className="py-1 font-bold">${getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default BagItemsSummary;
