import React, { useState } from 'react';
import './index.css'; // Import Tailwind CSS

const ProductList = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isBrandRange, setIsBrandRange] = useState(true);
  const [products, setProducts] = useState([
    // Danh sách các sản phẩm giả lập
    { id: 1, name: 'Sản phẩm A', rating: 5 },
    { id: 2, name: 'Sản phẩm B', rating: 4 },
    { id: 3, name: 'Sản phẩm C', rating: 3 },
    { id: 4, name: 'Sản phẩm D', rating: 2 },
    { id: 5, name: 'Sản phẩm E', rating: 1 },
  ]);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const filteredProducts = selectedRating
    ? products.filter(product => product.rating === selectedRating)
    : products;

  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <div className="brandRanges">
          <div
            className="collapse-title text-base font-medium cursor-pointer my-4"
            onClick={() => setIsBrandRange(!isBrandRange)}
          >
            Đánh giá
          </div>
          {isBrandRange && (
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
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-semibold mb-4">Danh sách sản phẩm</h2>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id} className="mb-2 p-2 border-b border-gray-200">
              {product.name} - {product.rating} sao
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
