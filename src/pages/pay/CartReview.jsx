import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const CartReview = ({
  cartItems,
  applyDiscountCode,
  onNext,
  onRemove,
  onQuantityChange,
}) => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [transport, setTransport] = useState(40000);

  const handleApplyDiscount = () => {
    const discount = applyDiscountCode(discountCode);
    setDiscountAmount(discount);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const finalPrice = totalPrice + transport - discountAmount;

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 p-4">
          <h2 className="text-lg font-bold mb-2">Kiểm tra giỏ hàng</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-4 bg-white p-2 rounded shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-1 mx-2">
                  <div className="text-md font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500 flex gap-2">
                    <p>${item.price}</p>
                    <p>{item.color}</p>
                    <p>{item.frame}</p>
                    <p>{item.wheelSize}</p>
                  </div>
                </div>
                <div className="flex items-center mr-4">
                  <button
                    onClick={() => onQuantityChange(item.id, -1)}
                    className="px-4 py-2 text-sm bg-gray-200 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm bg-gray-100">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onQuantityChange(item.id, 1)}
                    className="px-4 py-2 text-sm bg-gray-200 rounded-r"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-2xl text-gray-500 hover:text-red-700"
                >
                  <TiDeleteOutline />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl">
          <h2 className="text-lg font-bold mb-2">Áp mã giảm giá</h2>
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="outline-none rounded p-2 w-full mb-2"
            placeholder="Nhập mã giảm giá"
          />
          <button
            onClick={handleApplyDiscount}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Áp dụng
          </button>
          <div className="mt-4">
            <p className="font-medium text-sm mt-2">Tổng: {totalPrice} VND</p>
            <p className="text-sm mt-2">Giảm giá: {discountAmount} VND</p>
            <p className="text-sm mt-2">Phí vận chuyển: {transport} VND</p>
            <p className="font-semibold text-base mt-2">Tổng tiền: {finalPrice} VND</p>
          </div>
          <button
            onClick={onNext}
            className="bg-green-500 text-white py-2 px-4 rounded mt-4"
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </>
  );
};

export default CartReview;
