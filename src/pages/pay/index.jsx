import React from 'react';
import Checkout from './Checkout';
import { useLocation } from 'react-router-dom';

// const cartItems = [
//   {
//     image: 'https://via.placeholder.com/150',
//     name: 'Sản phẩm 1',
//     price: 100000,
//     quantity: 2,
//     color: 'Đỏ',
//     frame: 'M',
//     wheelSize: 26,
//   },
//   {
//     image: 'https://via.placeholder.com/150',
//     name: 'Sản phẩm 2',
//     price: 200000,
//     quantity: 1,
//     color: 'Xanh',
//     frame: 'L',
//     wheelSize: 28,
//   },
// ];

const applyDiscountCode = (code) => {
  if (code === 'DISCOUNT10') {
    return 10000;
  }
  if (code === 'DISCOUNT20') {
    return 20000;
  }
  return 0;
};



const index = () => {

    const location = useLocation();
    const cartItems = location.state?.selectedProducts || [];

  return (
    <div className="App">
      <Checkout _cartItems={cartItems} applyDiscountCode={applyDiscountCode}  />
    </div>
  );
};

export default index;
