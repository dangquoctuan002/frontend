import React from "react";
import { TiDeleteOutline } from "react-icons/ti";


const CartItem = ({
  cartItems,
  onRemove,
  onQuantityChange,
  selectedItems,
  onCheckboxChange,
  onCheckout,
}) => {
  const selectedCartItems = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );
  const total = selectedCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalQuantity = selectedCartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 bg-white p-2 rounded shadow"
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedItems.includes(item.id)}
                onChange={(e) => onCheckboxChange(item.id, e.target.checked)}
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover"
              />
              <div className="flex-1 mx-2">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-sm text-gray-500">${item.price}</div>
              </div>
              <div className="flex items-center mr-4">
                <button
                  onClick={() => onQuantityChange(item.id, -1)}
                  className="px-1 text-sm bg-gray-200 rounded-l"
                >
                  -
                </button>
                <span className="px-1 text-sm bg-gray-100">{item.quantity}</span>
                <button
                  onClick={() => onQuantityChange(item.id, 1)}
                  className="px-1 text-sm bg-gray-200 rounded-r"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-lg text-gray-500 hover:text-red-700"
              >
                <TiDeleteOutline />
              </button>
            </div>
          ))}
      </div>
      <div className="p-4 bg-white shadow">
        <div className="text-lg font-bold">Tổng: ${total}</div>
        <div className="text-sm">Số lượng: {totalQuantity}</div>
        <button
          onClick={onCheckout}
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Thanh toán
        </button>
      </div>
    </>
  );
};

export default CartItem;
