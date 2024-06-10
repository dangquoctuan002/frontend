import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { TbShoppingBagHeart } from "react-icons/tb";
import {
  categoryRanges,
  products,
  brandRanges,
  priceRanges,
  colorRanges,
  sort,
} from "../../services/database";

// const priceRanges = [
//   { name: "Tất cả", id: "" },
//   { name: "Dưới 1 triệu", id: "under_1m" },
//   { name: "Từ 1 đến 2 triệu", id: "1m_2m" },
//   { name: "Từ 2 đến 5 triệu", id: "2m_5m" },
//   { name: "Từ 5 đến 10   triệu", id: "5m_10m" },
//   { name: "Trên 10 triệu", id: "over_10m" },
// ];

// const categoryRanges = [
//   { name: "Tất cả", id: "" },
//   { name: "Bike", id: "1" },
//   { name: "Car", id: "2" },
//   { name: "Motobike", id: "3" },
//   { name: "Xe ôm", id: "4" },
//   { name: "Xe hàng", id: "5" },
//   { name: "Xe điện", id: "6" },
// ];

// const brandRanges = [
//   { name: "Tất cả", id: "" },
//   { name: "Java", id: "1" },
//   { name: "Oppo", id: "2" },
//   { name: "Sam Sung", id: "3" },
// ];

// const colorRanges = [
//   //   { name: "Tất cả", code: "" },
//   { name: "Red", code: "#FF0000" },
//   { name: "Green", code: "#00FF00" },
//   { name: "Blue", code: "#0000FF" },
//   { name: "Yellow", code: "#FFFF00" },
//   { name: "Black", code: "#000000" },
//   { name: "White", code: "#FFFFFF" },
// ];

// const sort = [
//   { name: "A -> Z", value: "AZ" },
//   { name: "Z -> A", value: "ZA" },
//   { name: "Tăng dần", value: "ASC" },
//   { name: "Giảm dần", value: "DESC" },
// ];

// const products = [
//   {
//     id: "1",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "2",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "3",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "4",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "5",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "6",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "7",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "8",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "9",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "10",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "11",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
//   {
//     id: "12",
//     code: "#abc",
//     name: "Bike",
//     title: "Xe đạp truyền thống",
//     price: "300000",
//     discount: "30",
//     image:
//       "https://bizweb.dktcdn.net/thumb/1024x1024/100/412/747/products/img-20230126-200843.jpg",
//   },
// ];

const ratings = [5, 4, 3, 2, 1];

function Table() {
  const [isPriceRange, setIsPriceRange] = useState(true);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const [isCategoryRange, setIsCategoryRange] = useState(true);
  const [selectedCategoryRange, setSelectedCategoryRange] = useState("");
  const handleCategoryRangeChange = (id) => {
    setSelectedCategoryRange(id);
  };

  const [isBrandRange, setIsBrandRange] = useState(true);
  const [selectedBrandRange, setSelectedBrandRange] = useState("");
  const handleBrandRangeChange = (event) => {
    setSelectedBrandRange(event.target.value);
  };

  const [isColorRange, setIsColorRange] = useState(true);
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const [isRatingRange, setIsRatingRange] = useState(true);
  const [selectedRating, setSelectedRating] = useState(null);
  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  console.log(selectedRating);
  //   const filteredProducts = selectedRating
  //     ? products.filter(product => product.rating === selectedRating)
  //     : products;

  return (
    <>
      <section className="px-2 lg:px-28 min-h-screen mt-[60px] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="grid lg:grid-cols-1 grid-cols-2 me-2 gap-1 h-fit text-sm">
            <div className="priceRanges">
              <div
                className="collapse-title text-base font-medium cursor-pointer my-4"
                onClick={() => setIsPriceRange(!isPriceRange)}
              >
                Sắp xếp giá
              </div>
              {isPriceRange && (
                <div className="collapse-content ml-4">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex gap-2 mt-2">
                      <label className="hover:underline cursor-pointer">
                        <input
                          type="radio"
                          name="price-range"
                          value={range.id}
                          checked={selectedPriceRange === range.id}
                          onChange={handlePriceRangeChange}
                          className="mr-2"
                        />
                        {range.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="brandRanges">
              <div
                className="collapse-title text-base font-medium cursor-pointer my-4"
                onClick={() => setIsBrandRange(!isBrandRange)}
              >
                Thương hiệu
              </div>
              {isBrandRange && (
                <div className="collapse-content ml-4">
                  {brandRanges.map((range) => (
                    <div key={range.id} className="flex gap-2 mt-2">
                      <label className="hover:underline cursor-pointer">
                        <input
                          type="radio"
                          name="brand-range"
                          value={range.id}
                          checked={selectedBrandRange == range.id}
                          onChange={handleBrandRangeChange}
                          className="mr-2"
                        />
                        {range.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="colorRanges">
              <div
                className="collapse-title text-base font-medium cursor-pointer my-4"
                onClick={() => setIsColorRange(!isColorRange)}
              >
                Chọn màu
              </div>
              {isColorRange && (
                <div className="collapse-content ml-4">
                  {colorRanges.map((color) => (
                    <div key={color.name} className="flex gap-2 mb-2">
                      <span
                        className={`w-5 h-5 cursor-pointer border rounded-full hover:scale-90 duration-300
                      ${
                        selectedColor === color.code
                          ? "border-gray-950 scale-90"
                          : "border-1 border-gray-400"
                      }`}
                        style={{
                          backgroundColor: color.code,
                        }}
                        onClick={() => handleColorClick(color.code)}
                      />
                      <span
                        onClick={() => handleColorClick(color.code)}
                        className={`hover:underline cursor-pointer
                        ${
                          selectedColor === color.code
                            ? "font-bold underline italic"
                            : "border-1 border-gray-400"
                        }`}
                      >
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="ratingRange">
              <div
                className="collapse-title text-base font-medium cursor-pointer my-4"
                onClick={() => setIsRatingRange(!isRatingRange)}
              >
                Đánh giá
              </div>
              {isRatingRange && (
                <div className="collapse-content ml-4">
                  {ratings.map((rating) => (
                    <div key={rating} className="flex gap-2 mt-2">
                      <label className="hover:underline cursor-pointer flex items-center">
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={selectedRating === rating}
                          onChange={() => handleRatingChange(rating)}
                          className="mr-2"
                        />
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, index) => (
                            <svg
                              key={index}
                              className="w-4 h-4 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927C9.341 2.059 10.659 2.059 10.951 2.927l1.286 3.953a1 1 0 00.95.69h4.178c1.054 0 1.502 1.354.648 2.02l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.953c.292.868-.755 1.591-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.473-1.832-.25-1.54-1.118l1.286-3.953a1 1 0 00-.364-1.118l-3.385-2.46c-.854-.666-.406-2.02.648-2.02h4.178a1 1 0 00.95-.69l1.286-3.953z" />
                            </svg>
                          ))}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 lg:border-s border-base-300 min-h-[50vh]">
            <div className="text-center text-2xl my-4">
              <span>Tất cả</span>
            </div>

            <div className="navbar grid grid-cols-2 lg:grid-cols-4">
              <div className="categoryRanges col-span-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 px-4">
                  {categoryRanges.map((value) => (
                    <p
                      key={value.id}
                      value={value.id}
                      className={`hover:cursor-pointer border rounded-lg p-2 text-center hover:scale-90 duration-300
              ${
                selectedCategoryRange === value.id
                  ? "border-blue-500 shadow-md"
                  : "border-1 border-gray-400"
              }`}
                      onClick={() => handleCategoryRangeChange(value.id)}
                    >
                      <span className="me-auto">{value.name}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="Country col-span-1">
                <select
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectedCountry}
                  onChange={handleChange}
                >
                  {sort.map((value) => (
                    <option key={value.value} value={value.value}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 px-4">
              <div className="danh-sach-san-pham grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="san-pham-card text-center relative border rounded-lg shadow-lg hover:shadow-2xl transition-shadow group duration-100"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover rounded-t-lg hover:scale-90 duration-300"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <h4 className="text-sm text-gray-500">{product.title}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-lg font-semibold">
                          {product.price} USD
                        </span>
                        {/* {product.discount && (
                          <span className="text-sm text-red-500">
                            {product.discount}% OFF
                          </span>
                        )} */}
                      </div>
                    </div>
                    <button className="xem-chi-tiet-button absolute bottom-4 left-4 right-4 bg-blue-500 text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Xem Chi Tiết
                    </button>
                    {/* <span className="absolute top-1 right-4 text-red-500 cursor-pointer rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ❤
                    </span> */}
                    <span className="absolute top-2 right-4 text-red-500 cursor-pointer rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <TbShoppingBagHeart />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Table;
