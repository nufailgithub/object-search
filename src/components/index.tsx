"use client";
import { ProductCard } from "@/components/card";
import { ObjectiveClient } from "objective-sdk";
import { useEffect, useState } from "react";

const objective = new ObjectiveClient({
  apiKey: "sk_gZKnPCiefXaR",
});

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [indexId, setIndexId] = useState("");

  const fetchProducts = async (indexId: any) => {
    if (query === "") {
      setProducts([]);
      return;
    }

    const results = await objective.indexes.index.search(indexId, {
      query,
    });

    console.log(results);
    // setProducts(results);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="p-2 border rounded"
      />
      <button
        onClick={() => {
          fetchProducts("idx_OPnvewSgPBE3");
        }}
      >
        Search
      </button>
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
