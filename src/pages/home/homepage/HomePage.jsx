// src/pages/HomePage.js
import React from "react";
import Header from "../../../components/layout/Header";
import Sidebar from "../../../components/layout/Sidebar";
import Slider from "../../../components/slider";
import Section1 from "../section_Category"
import FaceUpOnScroll from "../../../components/test/FaceUpOnScroll"
import ProductNew from "../section_Product_new"
import ProductHot from "../section_Product_hot"
import ProductSale from "../section_Product_sale"
import Brands from "../section_brands"
import Footer from "../../../components/layout/Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Slider />
      <Section1 />
      <ProductNew />
      <ProductHot />
      <ProductSale />
      <Brands />


      <Footer />
    </div>
  );
};

export default HomePage;
