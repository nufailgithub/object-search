import React from "react";

export const ProductCard = ({ product }) => {
  console.log("product=========: ", product);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-slate-400">
      <img
        className="overflow-hidden object-fill w-56 h-68"
        src={product.images[0]}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.brand}</p>
      </div>
    </div>
  );
};

// {
//   "title": "Iconic Crew Neck",
//   "price": "Rs 2,490.00",
//   "images": [
//       "https://pepperstreet.co/cdn/shop/files/ROYALBLUE.png",
//       "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_4.png",
//       "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_2.png",
//       "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_3.png",
//       "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_5.png",
//       "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_6.png",
//       "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN.png",
//       "https://pepperstreet.co/cdn/shop/files/MAROON_4.png",
//       "https://pepperstreet.co/cdn/shop/files/MAROON_2.png",
//       "https://pepperstreet.co/cdn/shop/files/MAROON_3.png",
//       "https://pepperstreet.co/cdn/shop/files/MAROON_5.png",
//       "https://pepperstreet.co/cdn/shop/files/MAROON_6.png",
//       "https://pepperstreet.co/cdn/shop/files/MAROON.png",
//       "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_2_73e31cbc-daa1-40e5-af78-8af6d24eff5a.png",
//       "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_3_e2b8883e-59ea-430b-8e10-82ed19588523.png",
//       "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_4_50e1dd1e-1339-41d0-bcd4-111f81a31960.png",
//       "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_5_b21515b4-8371-4ae7-a559-5ac496021e98.png",
//       "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_6_13646580-c797-4949-be68-dd3dd4c47684.png",
//       "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_ac61ee54-b225-45e8-a21d-784cad3ca909.png",
//       "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_2.png",
//       "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_3.png",
//       "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_4.png",
//       "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_5.png",
//       "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_6.png"
//   ],
//   "description": "Made with 95% premium cotton and washed for a softer feel our iconic crew neck screams comfort and minimal style! Introducing the newest colours to your wardrobe you can never go wrong with this tee!",
//   "size": [
//       "XS",
//       "S",
//       "M",
//       "L",
//       "XL",
//       "XXL"
//   ],
//   "color": [
//       "NAVY BLUE",
//       "COFFEE BROWN",
//       "ROYAL BLUE",
//       "MAROON"
//   ]
// }
