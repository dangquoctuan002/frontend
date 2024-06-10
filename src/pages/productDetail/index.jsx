// src/pages/HomePage.js
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { LuChevronRight } from "react-icons/lu";
import { AiOutlineCheck } from "react-icons/ai";

const images = [
  "https://bizweb.dktcdn.net/100/412/747/products/lanq-83-new-den-cam.jpg?v=1697185532437",
  "https://bizweb.dktcdn.net/100/412/747/products/princess-pink-children-bike-fashion-style-baby-bicycle-hight-quality-girl-kids-bike-1-c8c92956-6b72-4edb-ba6d-01c4385ade33.jpg?v=1667469437600",
  "https://bizweb.dktcdn.net/100/412/747/products/xe-dap-dua-sava-x9-2-full-carbon-shimano-105-r7000-2-min.jpg?v=1702704887540",
  "https://bizweb.dktcdn.net/100/412/747/products/magicbros-cx5-plus-2024-den.jpg?v=1714400676900",
  "https://bizweb.dktcdn.net/100/412/747/products/magicbros-cx5-plus-2024-den.jpg?v=1714400676900",
  "https://bizweb.dktcdn.net/100/412/747/products/magicbros-cx5-plus-2024-den.jpg?v=1714400676900",
  "https://bizweb.dktcdn.net/100/412/747/products/magicbros-cx5-plus-2024-den.jpg?v=1714400676900",
];
const colors = [
  { name: "Red", code: "#FF0000" },
  { name: "Green", code: "#00FF00" },
  { name: "Blue", code: "#0000FF" },
  { name: "Yellow", code: "#FFFF00" },
  { name: "Black", code: "#000000" },
  { name: "White", code: "#FFFFFF" },
];

const reviews = [
  //   { author: "Nguyễn Văn A", content: "Sản phẩm rất tốt, tôi rất hài lòng." },
  //   { author: "Trần Thị B", content: "Chất lượng tốt, giao hàng nhanh." },
];

const index = (props) => {
  const data = {
    id: 1,
    code: "PROD001",
    name: "Mountain Bike",
    title: "Premium Mountain Bike",
    image:
      "https://bizweb.dktcdn.net/100/412/747/products/trinx-gt24-den-do-1cf5a533-3bb8-4ded-a371-10e3717894b8.jpg?v=1693568131703",
    description: "A lightweight road bike perfect for long rides",
    framesize: "M",
    wheelsize: "26",
    color: "#FFFFFF",
    price: 999.99,
    quantity: 50,
    brand: "Apple",
    category: "Books",
  };


  const [selectedFrameSize, setSelectedFrameSize] = useState(data.framesize);
  const [selectedWheelSize, setSelectedWheelSize] = useState(data.wheelsize);
  const [selectedColor, setSelectedColor] = useState(data.color);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(images[0]);

  const [activeTab, setActiveTab] = useState("description");

  const handleFrameSizeClick = (size) => {
    setSelectedFrameSize(size);
  };
  const handleWheelSizeClick = (size) => {
    setSelectedWheelSize(size);
  };
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (delta) => {
    setSelectedQuantity(selectedQuantity + delta);
  };
  return (
    <div className="bg-gray-50">
      <Header />

      <section className="px-2 lg:px-28 min-h-screen mt-[60px] bg-white">
        <div className="w-full flex justify-start p-2 border-b border-gray-200">
          <ul className="flex justify-center items-center text-sm text-gray-800">
            <li className="flex justify-center gap-1 items-center ">
              <Link to="/" className="">
                Trang chủ
              </Link>
              <span>
                <LuChevronRight className="text-gray-300" />
              </span>
            </li>
            <li className="flex justify-center gap-1 items-center ">
              <Link to="/" className="">
                danh mục
              </Link>
              <span>
                <LuChevronRight className="text-gray-300" />
              </span>
            </li>
            <li className="flex justify-center gap-1 items-center ">
              <span>sản phẩm 1</span>
            </li>
          </ul>
        </div>

        <div className="content w-full min-h-screen mt-2 grid grid-cols-1 lg:grid-cols-8 gap-4">
          <div className="images col-span-3">
            <div className="max-w-md mx-auto mt-10">
              <div className="mb-8 w-full h-72">
                <img
                  src={mainImage}
                  alt="Main product"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex space-x-2 flex-wrap gap-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-20 border border-gray-200 p-1 rounded-md"
                  >
                    <img
                      src={image}
                      alt={`Product thumbnail ${index}`}
                      className="w-14 m-auto object-cover rounded-lg cursor-pointer hover:opacity-80 hover:scale-90 duration-300"
                      onClick={() => setMainImage(image)}
                    />{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="product col-span-3 ">
            <div className="mt-4">
              <h2 className="text-2xl">{data.name}</h2>
              <div className="flex justify-start items-center gap-2 mt-2 text-xs text-gray-500">
                <div className="flex justify-center items-center gap-1">
                  <span>Tình trạng: </span>
                  <p className="text-purple-500">còn hàng</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <span>Danh mục: </span>
                  <p className="text-purple-500">{data.category}</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <span>Thương hiệu: </span>
                  <p className="text-purple-500">{data.brand}</p>
                </div>
              </div>
              <div className="price mt-4">
                <p className="text-2xl text-red-500">{data.price} đ</p>
                <div className="flex justify-start items-center gap-4 mt-2 px-8">
                  <span className="text-sm text-gray-700">
                    Giá thị trường: <strike> 846545561 đ</strike>
                  </span>
                  <span className="text-sm text-purple-500">
                    Tiết kiệm: 342314
                  </span>
                </div>
              </div>

              <div className="framesize my-5">
                <label
                  className="block text-gray-950 text-sm mb-2"
                  htmlFor="Framesize"
                >
                  Frame size
                </label>

                <ul className="flex flex-wrap justify-start items-center gap-2">
                  {["S","M","L"].map((size) => (
                    <li
                      key={size}
                      className={`w-10 p-1 cursor-pointer border text-center text-black ${
                        selectedFrameSize === size
                          ? "border-purple-600 rounded-md"
                          : "hover:border-purple-600 rounded-md"
                      }`}
                      onClick={() => handleFrameSizeClick(size)}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="Wheelsize my-5">
                <label
                  className="block text-gray-950 text-sm mb-2"
                  htmlFor="Wheelsize"
                >
                  Wheel size
                </label>

                <ul className="flex flex-wrap justify-start items-center gap-2">
                  {["24", "26", "28"].map((size) => (
                    <li
                      key={size}
                      className={`w-10 p-1 cursor-pointer border text-black text-center ${
                        selectedWheelSize === size
                          ? "border-purple-600 rounded-md "
                          : "hover:border-purple-600 rounded-md"
                      }`}
                      onClick={() => handleWheelSizeClick(size)}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="Color my-5">
                <label
                  className="block text-gray-950 text-sm mb-2"
                  htmlFor="Color"
                >
                  Color
                </label>

                <ul className="flex flex-wrap justify-start items-center gap-2">
                  {colors.map((color) => (
                    <li
                      key={color.name}
                      className={`w-6 h-6 cursor-pointer border rounded-full hover:scale-90 duration-300
                      ${
                        selectedColor === color.code
                          ? "border-purple-600 border-2"
                          : "border-gray-500"
                      }`}
                      style={{ backgroundColor: color.code }}
                      onClick={() => handleColorClick(color.code)}
                    />
                  ))}
                </ul>
              </div>

              <div className="Quantity mt-4">
                <label
                  className="block text-gray-950 text-sm mb-2"
                  htmlFor="Quantity"
                >
                  Quantity
                </label>

                <div className="flex items-center mr-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 text-sm bg-gray-200 rounded-l border hover:border-purple-600"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm bg-gray-100">
                    {selectedQuantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 text-sm bg-gray-200 rounded-r border hover:border-purple-600"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="btn mt-8">
                <div className="flex justify-around items-center flex-wrap">
                  <button className="p-2 text-white bg-purple-500 rounded-lg  text-sm">
                    {" "}
                    <p className="hover:scale-90 duration-300">
                      Thêm vào giỏ hàng
                    </p>
                  </button>
                  <button className="p-2 text-white bg-purple-500 rounded-lg  text-sm">
                    <p className="hover:scale-90 duration-100"> Mua ngay</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="avd col-span-2 p-2">
            <div className="border border-gray-400">
              <span className="block w-full p-2 bg-purple-500 text-sm text-white">
                Bảo Hành & Chính Sách CSKH
              </span>
              <ul className="text-xs text-gray-600 p-2 leading-6">
                <li>✔ Bảo hành 03 năm, đổi lỗi trong vòng 30 ngày</li>
                <li>✔ FREE SHIP toàn quốc, giao hàng nhanh đảm bảo</li>
                <li>
                  ✔ Tặng phụ kiện chắn bùn, gọng bình nước, bình nước thể thao
                </li>
                <li>
                  ✔ Bảo hành khung sườn 03 năm, phụ tùng (xích líp, trục giữa,
                  chuyển líp, phanh, tay đề) 12 tháng
                </li>
              </ul>
            </div>
            <div className="border border-gray-400 text-center mt-4">
              <span className="block w-full p-2 text-sm text-black">
                CHÚNG TÔI LUÔN SẴN SÀNG ĐỂ GIÚP ĐỠ BẠN
              </span>
              <img
                className="m-auto"
                src="https://bizweb.dktcdn.net/100/412/747/themes/936937/assets/ant_product_support.png?1715587484127"
                alt=""
              />
              <p className="block w-full p-2 text-xs text-black">
                Để được hỗ trợ tốt nhất. Hãy gọi
              </p>
              <p className="block w-full text-xl mb-2 text-red-500">
                09 1900 8533
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-80">
          <div className="mb-4 border-b border-gray-300">
            <button
              className={`px-4 py-2 ${
                activeTab === "description" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Mô tả sản phẩm
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "reviews" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Đánh giá sản phẩm
            </button>
          </div>
          {activeTab === "description" && (
            <div>
              <h2 className="text-lg font-bold mb-2">Mô tả sản phẩm</h2>
              <p>{data.description}</p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              <h2 className="text-lg font-bold mb-2">Đánh giá sản phẩm</h2>
              {reviews.length === 0 ? (
                <p>Chưa có đánh giá nào.</p>
              ) : (
                <ul>
                  {reviews.map((review, index) => (
                    <li key={index} className="mb-2">
                      <p className="font-semibold">{review.author}</p>
                      <p>{review.content}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default index;
