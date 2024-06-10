import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sản phẩm 2",
      price: 200000,
      quantity: 1,
      color: "Xanh",
      frame: "L",
      wheelSize: 28,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Sản phẩm 1",
      price: 100000,
      quantity: 2,
      color: "Đỏ",
      frame: "M",
      wheelSize: 26,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Sản phẩm 1",
      price: 100000,
      quantity: 2,
      color: "Đỏ",
      frame: "S",
      wheelSize: 26,
      image: "https://via.placeholder.com/50",
    },
    // Thêm nhiều sản phẩm để test scroll
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

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

  const handleCheckboxChange = (id, isChecked) => {
    setSelectedItems(
      isChecked
        ? [...selectedItems, id]
        : selectedItems.filter((itemId) => itemId !== id)
    );
  };

  const handleCheckout = () => {
    const selectedProducts = cartItems.filter((item) =>
      selectedItems.includes(item.id)
    );
    if(selectedProducts.length === 0){
        alert("chwua chon san pham")
    }else{
    navigate("/pay", { state: { selectedProducts } });
    props.showModel(false);
  }
    // Thực hiện hành động gửi sản phẩm đã chọn sang trang thanh toán
  };

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          props.showModel(false);
        }}
        className="w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-30"
      ></div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 right-0 z-40 w-80 h-screen  transition-transform duration-300 ease-in-out transform ${
          props.model ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 hide-scrollbar">
          <div className=" h-screen bg-gray-100 flex flex-col">
            <CartItem
              cartItems={cartItems}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
              selectedItems={selectedItems}
              onCheckboxChange={handleCheckboxChange}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </aside>
    </>
  );
}

export default Cart;
