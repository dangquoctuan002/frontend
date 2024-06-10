import React, { useState } from "react";

const CustomerInfo = ({ onPrev, onNext, onChange, cartItems }) => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    province: "",
    district: "",
    ward: "",
    address: "",
    addressName: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleNext = () => {
    onChange(info);
    onNext();
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Thông tin người đặt hàng</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid grid-cols-2 col-span-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            value={info.firstName}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Họ"
          />
          <input
            type="text"
            name="lastName"
            value={info.lastName}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Tên"
          />
          <input
            type="text"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Số điện thoại"
          />
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Email"
          />
          <input
            type="text"
            name="province"
            value={info.province}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Tỉnh"
          />
          <input
            type="text"
            name="district"
            value={info.district}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Huyện"
          />
          <input
            type="text"
            name="ward"
            value={info.ward}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Xã"
          />
          <input
            type="text"
            name="address"
            value={info.address}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Tòa nhà/số nhà/tên đường"
          />
          <input
            type="text"
            name="addressName"
            value={info.addressName}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Tên địa chỉ"
          />
          <textarea
            name="note"
            value={info.note}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Lưu ý"
          />
        </div>
        <div className="col-span-1 bg-gray-200 p-4 mb-4">
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-4 bg-white p-2 rounded shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 object-cover mr-4"
                />
                <div className="flex-1 mx-2">
                  <div className="text-xs font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500 flex gap-2">
                    <p>${item.price}</p>
                    <p>{item.color}</p>
                    <p>{item.frame}</p>
                    <p>{item.wheelSize}</p>
                  </div>
                </div>
                <div className="flex items-center mr-4">
                  <span className="text-sm">
                    x{item.quantity}
                  </span>

                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Quay lại
        </button>
        <button
          onClick={handleNext}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default CustomerInfo;
