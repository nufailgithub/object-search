import React from "react";

export const ProductCard = ({ product }) => {
  console.log("product=========: ", product);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="overflow-hidden object-fill w-56 h-68"
        src={product.imageURLHighRes[0]}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.brand}</p>
      </div>
    </div>
  );
};
