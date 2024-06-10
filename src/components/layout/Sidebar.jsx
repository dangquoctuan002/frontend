import React from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { MdBrandingWatermark } from "react-icons/md";
import { MdDashboard } from "react-icons/md";


const data = [
  {
    title: "Trang chủ",
    to: "/",
    icon: <MdCategory className="icon" />,
  },
  {
    title: "Sản phẩm",
    to: "/product",
    icon: <MdBrandingWatermark className="icon" />,
  },
  {
    title: "Products",
    to: "/single",
    icon: <AiFillProduct className="icon" />,
  },
  {
    title: "Thanh Toán",
    to: "/pay",
    icon: <IoMdCart className="icon" />,
  },
  {
    title: "Users",
    to: "/",
    icon: <FaUsers className="icon" />,
  },
  {
    title: "Reviews",
    to: "/",
    icon: <MdOutlineRateReview className="icon" />,
  },
];

function Sidebar(props) {
  return (
    <>
      <div
        onPointerEnter={(e) => {
          e.stopPropagation();
          props.showModel(false);
        }}
        className="w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-30"
      ></div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out transform ${
          props.model ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 hide-scrollbar">
          <div className="top flex justify-center items-center">
            <Link
              to="/"
              className="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 group"
            >
              <MdDashboard />
              E-Shop
            </Link>
          </div>
          <ul className="space-y-2 font-medium mt-8">
            {data.map((value, index) => {
              return (
                <li key={index}>
                  <Link
                    to={value.to}
                    className="flex items-center px-4 py-3 ml-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900 group"
                  >
                    {value.icon}
                    <span className="ms-3">{value.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="bottom mt-[80px]">
            <div className="flex justify-center m-auto w-48 items-center gap-2 py-4 rounded-2xl text-xs bg-lime-400 text-white cursor-pointer">
              <IoMdSend className="icon" />
              <span>Send daily report</span>
            </div>
            <div className="flex justify-between items-center gap-3 m-5">
              <figure>
                <img
                  className="w-8 h-8 rounded-lg"
                  src="https://th.bing.com/th/id/OIP.gIY2zFXyzM6sPatl9Z4GoAHaHa?rs=1&pid=ImgDetMain"
                  alt=""
                />
              </figure>
              <span>Tuan Dang</span>
              <SlOptionsVertical className="icon cursor-pointer" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
