import React, { useState, useEffect } from 'react';

// Define the products array with image paths
const products = [
  { "name": "Product 1", "price": "$19.99", "image": "product1.png" },
  { "name": "Product 2", "price": "$29.99", "image": "product2.png" },
  { "name": "Product 3", "price": "$39.99", "image": "product3.png" },
  { "name": "Product 4", "price": "$49.99", "image": "product4.png" }
];

// Static imports for images
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';

// Map filenames to imported images
const images = {
  "product1.png": product1,
  "product2.png": product2,
  "product3.png": product3,
  "product4.png": product4,
};

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="flex overflow-hidden justify-center py-12">
      <div
        className="flex transition-transform duration-700"
      >
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center mx-2">
            <img
              src={images[product.image]}
              alt={product.name}
              className="w-52 h-52 object-cover mb-2"
            />
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold text-yellow-400 uppercase">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
