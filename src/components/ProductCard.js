import React from "react";

const ProductCard = ({ name, image, price }) => (
  <div className="bg-white rounded-lg shadow-md p-4 transform transition-all duration-300 hover:scale-105">
    <img
      src={image}
      alt={name}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-orange-500 font-bold mt-2">{price} MT</p>
      <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-orange-600 transition-colors w-full">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;
