import React from 'react';

const OrderComplete = ({ customerInfo, paymentMethod, cartItems, onComplete }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCompleteOrder = () => {
    onComplete();
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Hoàn thành đơn hàng</h2>
      <div className="mb-4">
        <h3 className="font-bold">Thông tin người đặt hàng</h3>
        <p>{customerInfo.firstName} {customerInfo.lastName}</p>
        <p>{customerInfo.phone}</p>
        <p>{customerInfo.email}</p>
        <p>{customerInfo.address}, {customerInfo.ward}, {customerInfo.district}, {customerInfo.province}</p>
        <p>{customerInfo.addressName}</p>
        <p>{customerInfo.note}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Phương thức thanh toán</h3>
        <p>{paymentMethod === 'cash' ? 'Thanh toán tiền mặt' : 'Thanh toán online'}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Danh sách sản phẩm</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              <p>{item.name}</p>
              <p>Giá: {item.price} VND</p>
              <p>Số lượng: {item.quantity}</p>
              <p>Màu sắc: {item.color}</p>
              <p>Khung xe: {item.frame}</p>
              <p>Kích thước bánh xe: {item.wheelSize}</p>
            </li>
          ))}
        </ul>
        <p className="font-bold">Tổng tiền: {totalPrice} VND</p>
      </div>
      <button onClick={handleCompleteOrder} className="bg-green-500 text-white py-2 px-4 rounded">
        Đặt hàng
      </button>
    </div>
  );
};

export default OrderComplete;
