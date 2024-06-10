import React, { useState } from 'react';

const PaymentMethod = ({ onPrev, onNext, onChange }) => {
  const [method, setMethod] = useState('cash');

  const handlePaymentChange = (e) => {
    setMethod(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Phương thức thanh toán</h2>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="cash"
            checked={method === 'cash'}
            onChange={handlePaymentChange}
            className="mr-2"
          />
          Thanh toán tiền mặt
        </label>
        <label>
          <input
            type="radio"
            value="online"
            checked={method === 'online'}
            onChange={handlePaymentChange}
            className="mr-2"
          />
          Thanh toán online
        </label>
      </div>
      <div className="flex justify-between">
        <button onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded">
          Quay lại
        </button>
        <button onClick={onNext} className="bg-green-500 text-white py-2 px-4 rounded">
          Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
