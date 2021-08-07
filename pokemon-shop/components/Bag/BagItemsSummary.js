import { useEffect } from "react";

const BagItemsSummary = ({
  getTotalPrice,
  getTotalItems,
  totalPrice,
  totalItems,
}) => {
  useEffect(() => {
    getTotalItems();
    getTotalPrice();
  }, [getTotalItems, getTotalPrice]);
  return (
    <div className="flex justify-between bg-gray-100 text-sm border border-black px-6 py-4 mb-6">
      <div className="">
        <p className="py-1 font-light">Items</p>
        <p className="py-1 font-light">Shipping</p>
        <p className="py-1 font-bold">Total</p>
      </div>
      <div className="">
        <p className="py-1 font-light">{totalItems}</p>
        <p className="py-1 font-light">FREE</p>
        <p className="py-1 font-bold">${totalPrice}</p>
      </div>
    </div>
  );
};

export default BagItemsSummary;
