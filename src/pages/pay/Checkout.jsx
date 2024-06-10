import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartReview from "./CartReview";
import CustomerInfo from "./CustomerInfo";
import PaymentMethod from "./PaymentMethod";
import OrderComplete from "./OrderComplete";
import { MdDashboard } from "react-icons/md";

const repeat = [
  { id: 1, name: "Thông tin giỏ hàng" },
  { id: 2, name: "Thông tin đặt hàng" },
  { id: 3, name: "Chọn thanh toán" },
  { id: 4, name: "Hoàn tất đơn hàng" },
];

const Checkout = ({ _cartItems, applyDiscountCode }) => {
  const [step, setStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [cartItems, setCartItems] = useState(_cartItems);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleCustomerInfoChange = (info) => {
    setCustomerInfo(info);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleOrderComplete = () => {
    // Add logic to save order to database
    alert("Order completed successfully!");
  };

  return (
    <>
      <div className="flex justify-around items-center mt-10">
        <Link
          to="/product"
          className="w-40 px-2 font-medium ml-4 cursor-pointer"
        >
          {"< "} tiếp tục mua hàng
        </Link>
        <div className="flex items-center">
          <a href="/" className="text-lg font-bold flex items-center space-x-2">
            <MdDashboard />
            E-Shop
          </a>
        </div>
        <div className="w-40 px-2 font-medium ml-4 cursor-pointer">
          hỗ trợ mua hàng
        </div>
      </div>
      <div className="mt-10 mb-24">
        <div className="flex justify-center items-center gap-32">
          {repeat.map((value) => (
            <div key={value.id} className="relative">
              <div className="flex justify-center items-center">
                <span
                  className={`w-6 h-6 border text-white text-xs flex justify-center items-center rounded-full
                      ${
                        step === value.id
                          ? "bg-purple-600 border-1"
                          : "bg-gray-500"
                      }`}
                >
                  {value.id}
                </span>
              </div>
              {value.id != 4 && (
                <span className="absolute top-0 left-10 mt-4 w-24 h-[1px] bg-slate-400" />
              )}

              <span
                className={`absolute top-5 -right-[4.5rem] mt-4 w-40 text-xs text-center ${
                  step === value.id ? "font-bold" : ""
                }`}
              >
                {value.name}
              </span>
            </div>
          ))}

        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        {step === 1 && (
          <CartReview
            cartItems={cartItems}
            applyDiscountCode={applyDiscountCode}
            onNext={handleNextStep}
            onRemove={handleRemove}
            onQuantityChange={handleQuantityChange}
          />
        )}
        {step === 2 && (
          <CustomerInfo
            onPrev={handlePrevStep}
            onNext={handleNextStep}
            onChange={handleCustomerInfoChange}
            cartItems={cartItems}
          />
        )}
        {step === 3 && (
          <PaymentMethod
            onPrev={handlePrevStep}
            onNext={handleNextStep}
            onChange={handlePaymentMethodChange}
          />
        )}
        {step === 4 && (
          <OrderComplete
            customerInfo={customerInfo}
            paymentMethod={paymentMethod}
            cartItems={cartItems}
            onComplete={handleOrderComplete}
          />
        )}
      </div>
    </>
  );
};

export default Checkout;
