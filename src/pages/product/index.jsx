// src/pages/HomePage.js
import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Table from "./Table";
// import ProductDetail from "../productDetail/ProductDetail";

const HomePage = () => {
  // const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="bg-gray-50">
      <Header />

      <Table/>
      {/* <Table onItemClick={handleProductClick} /> */}
      {/* {selectedProduct && <ProductDetail product={selectedProduct} />} */}

      <Footer />
    </div>
  );
};

export default HomePage;
