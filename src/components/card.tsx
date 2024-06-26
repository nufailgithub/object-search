import React from "react";

export const ProductCard = ({ product }) => {
  // console.log("product=========: ", product);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl m-4 ">
      <div className="w-56 h-68">
        <img
          className="overflow-hidden object-fill w-full h-full"
          src={product.imageURLHighRes[0]}
          height={56}
          width={68}
          alt={product.title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.brand}</p>
      </div>
    </div>
  );
};
