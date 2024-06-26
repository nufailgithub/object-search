"use client";
import { ProductCard } from "@/app/component/card";
import { ObjectiveClient } from "objective-sdk";
import { useEffect, useState } from "react";

const objective = new ObjectiveClient({
  apiKey: "sk_gZKnPCiefXaR",
});

// Store products in Objective SDK
const storeProducts = async () => {
  try {
    for (let i = 0; i < products.length; i++) {
      await objective.objectStore.objects.upsert(`product_${i}`, products[i]);
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

//index creation
const createIndex = async () => {
  try {
    const response = await objective.indexes.create({
      configuration: {
        index_type: {
          name: "multimodal",
        },
        fields: {
          searchable: {
            allow: ["title", "brand"],
          },
          crawlable: {
            allow: ["images"],
          },
        },
      },
    });
    return response.id;
  } catch (error) {
    console.log("error: ", error);
  }
};

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  // Fetch products from the proxy server
  const fetchProducts = async (query: any) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/objective/index/search`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setProducts(data.results); // Assuming 'results' is where your products are returned
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(query);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="p-2 border rounded"
      />
      <div className="flex flex-wrap">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;

const products = [
  {
    title: "Oversized Tee",
    price: "Rs 2,690.00",
    images: [
      "https://pepperstreet.co/cdn/shop/files/CARBOMBLUE_3.png",
      "https://pepperstreet.co/cdn/shop/files/CARBOMBLUE_4.png",
      "https://pepperstreet.co/cdn/shop/files/CARBOMBLUE_2.png",
      "https://pepperstreet.co/cdn/shop/files/CARBOMBLUE.png",
      "https://pepperstreet.co/cdn/shop/files/WHITE_6.png",
      "https://pepperstreet.co/cdn/shop/files/BLACK_4.png",
      "https://pepperstreet.co/cdn/shop/files/BLACK_2.png",
      "https://pepperstreet.co/cdn/shop/files/BLACK_3.png",
      "https://pepperstreet.co/cdn/shop/files/BLACK_5.png",
      "https://pepperstreet.co/cdn/shop/files/BLACK_6.png",
      "https://pepperstreet.co/cdn/shop/files/BLACK.png",
      "https://pepperstreet.co/cdn/shop/files/GRAYMARL_4.png",
      "https://pepperstreet.co/cdn/shop/files/GRAYMARL_2.png",
      "https://pepperstreet.co/cdn/shop/files/GRAYMARL_3.png",
      "https://pepperstreet.co/cdn/shop/files/GRAYMARL_5.png",
      "https://pepperstreet.co/cdn/shop/files/GRAYMARL_6.png",
      "https://pepperstreet.co/cdn/shop/files/GRAYMARL.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_4.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_2.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_3.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_5.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_6.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE.png",
      "https://pepperstreet.co/cdn/shop/files/WHITE_3.png",
      "https://pepperstreet.co/cdn/shop/files/WHITE_2.png",
      "https://pepperstreet.co/cdn/shop/files/WHITE_4.png",
      "https://pepperstreet.co/cdn/shop/files/WHITE_5.png",
      "https://pepperstreet.co/cdn/shop/files/WHITE.png",
      "https://pepperstreet.co/cdn/shop/files/No_Image_Available_e50ac1e3-1002-40d7-939b-2d244c3c1ca0.webp",
    ],
    description: "",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    color: [
      "CARBON BLUE",
      "BLACK",
      "OCEAN BLUE",
      "GRAYMARL",
      "WHITE",
      "NAVY BLUE",
    ],
  },
  {
    title: "Project Pepper Tee",
    price: "Rs 3,350.00",
    images: [
      "https://pepperstreet.co/cdn/shop/files/232_1.png",
      "https://pepperstreet.co/cdn/shop/files/226_1.png",
      "https://pepperstreet.co/cdn/shop/files/225_1.png",
      "https://pepperstreet.co/cdn/shop/files/227_1.png",
      "https://pepperstreet.co/cdn/shop/files/1.jpg",
      "https://pepperstreet.co/cdn/shop/files/2.jpg",
      "https://pepperstreet.co/cdn/shop/files/6.jpg",
      "https://pepperstreet.co/cdn/shop/files/3.jpg",
      "https://pepperstreet.co/cdn/shop/files/5.jpg",
      "https://pepperstreet.co/cdn/shop/files/231_1.png",
      "https://pepperstreet.co/cdn/shop/files/233_1.png",
      "https://pepperstreet.co/cdn/shop/files/80_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/76_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/77_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/78_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/79_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/220_1.png",
      "https://pepperstreet.co/cdn/shop/files/219_1.png",
      "https://pepperstreet.co/cdn/shop/files/221_1.png",
      "https://pepperstreet.co/cdn/shop/files/73_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/71_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/72_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/74_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/75_1.jpg",
      "https://pepperstreet.co/cdn/shop/files/PROJECT_PEPPER_TEE__2_1.png",
    ],
    description:
      "Made with a propreitary premium cotton blend and washed for a softer feel our Project pepper tee was created with 'premium' in mind. Introducing the newest colours to your wardrobe you can never go wrong with this tee!",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    color: [
      "DARK OLIVE GREEN",
      "BLACK",
      "WHITE",
      "LIGHT OLIVE GREEN",
      "DARK GREY",
    ],
  },
  {
    title: "Iconic Crew Neck",
    price: "Rs 2,490.00",
    images: [
      "https://pepperstreet.co/cdn/shop/files/ROYALBLUE.png",
      "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_4.png",
      "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_2.png",
      "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_3.png",
      "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_5.png",
      "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN_6.png",
      "https://pepperstreet.co/cdn/shop/files/COFFEEBROWN.png",
      "https://pepperstreet.co/cdn/shop/files/MAROON_4.png",
      "https://pepperstreet.co/cdn/shop/files/MAROON_2.png",
      "https://pepperstreet.co/cdn/shop/files/MAROON_3.png",
      "https://pepperstreet.co/cdn/shop/files/MAROON_5.png",
      "https://pepperstreet.co/cdn/shop/files/MAROON_6.png",
      "https://pepperstreet.co/cdn/shop/files/MAROON.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_2_73e31cbc-daa1-40e5-af78-8af6d24eff5a.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_3_e2b8883e-59ea-430b-8e10-82ed19588523.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_4_50e1dd1e-1339-41d0-bcd4-111f81a31960.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_5_b21515b4-8371-4ae7-a559-5ac496021e98.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_6_13646580-c797-4949-be68-dd3dd4c47684.png",
      "https://pepperstreet.co/cdn/shop/files/NAVYBLUE_ac61ee54-b225-45e8-a21d-784cad3ca909.png",
      "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_2.png",
      "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_3.png",
      "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_4.png",
      "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_5.png",
      "https://pepperstreet.co/cdn/shop/files/ROYALBLUE_6.png",
    ],
    description:
      "Made with 95% premium cotton and washed for a softer feel our iconic crew neck screams comfort and minimal style! Introducing the newest colours to your wardrobe you can never go wrong with this tee!",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    color: ["NAVY BLUE", "COFFEE BROWN", "ROYAL BLUE", "MAROON"],
  },
  {
    title: "Legacy Sweatshirt",
    price: "Rs 3,200.00",
    images: [
      "https://pepperstreet.co/cdn/shop/files/128_1.png",
      "https://pepperstreet.co/cdn/shop/files/134_1.png",
      "https://pepperstreet.co/cdn/shop/files/133_1.png",
      "https://pepperstreet.co/cdn/shop/files/135_1.png",
      "https://pepperstreet.co/cdn/shop/files/127_1.png",
      "https://pepperstreet.co/cdn/shop/files/129_1.png",
      "https://pepperstreet.co/cdn/shop/files/125_1.png",
      "https://pepperstreet.co/cdn/shop/files/124_1.png",
      "https://pepperstreet.co/cdn/shop/files/126_1.png",
      "https://pepperstreet.co/cdn/shop/files/130_1.png",
      "https://pepperstreet.co/cdn/shop/files/132_1.png",
      "https://pepperstreet.co/cdn/shop/files/131_1.png",
      "https://pepperstreet.co/cdn/shop/files/PROJECT_PEPPER_TEE__8_1.png",
    ],
    description:
      "The legacy sweatshirt was created for anyone planning to outwork the rest. It is made with proprietary fabric treatments and a plush hand feel so that Its comfort will not be washed away over time. Featuring our classic back neck embroidery this sweatshirt is an Essential!",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    color: ["BLACK", "BRICK BROWN", "CHARCOAL GREY", "NAVY BLUE"],
  },
];
