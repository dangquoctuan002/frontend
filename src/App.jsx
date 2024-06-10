import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/homepage/HomePage";
import Product from "./pages/product"
import ProductDetail from "./pages/productDetail"
import Pay from "./pages/pay"

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/single" element={<ProductDetail />} />
              <Route path="/pay" element={<Pay />} />

               {/* <Route path="/categories">
                <Route index element={<ListCategory />} />
              </Route>

              <Route path="/brands">
                <Route index element={<ListBrand />} />
              </Route>

              <Route path="/products">
                <Route index element={<ListProduct />} />
              </Route> */}

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
