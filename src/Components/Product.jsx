import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductGrid from "./products/ProductGrid";

const Product = ({
  searchTerm = "",
  addToCart,
  addToWishlist,
  wishlist = [],
}) => {
  const categories = [
    "All",
    "Mens",
    "Womens",
    "Kids",
    "New Arrivals",
    "On Sale",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = ProductList.filter((item) => {
    const matchesCategory =
      activeTab === "All" ||
      (activeTab === "New Arrivals" && item.newArrival) ||
      (activeTab === "On Sale" && item.onSale) ||
      activeTab === item.category;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="product-section"
      className="mx-auto w-full max-w-[1300px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 xl:px-12"
    >
      {/* Section Heading */}
      <div className="mb-6 text-center sm:mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 sm:text-base">
          Our Collection
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl md:text-4xl">
          Explore Our Products
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-500 sm:text-base">
          Find your favorite styles from our latest collection.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-8 -mx-1 overflow-x-auto px-1 pb-3 sm:mb-10">
        <div className="flex min-w-max items-center justify-start gap-2 sm:justify-center sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 sm:px-5 sm:text-base ${
                activeTab === category
                  ? "bg-[#FF5F1F] text-white shadow-md"
                  : "border border-zinc-200 bg-white text-zinc-700 hover:border-[#FF5F1F] hover:text-[#FF5F1F]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredItems.length === 0 ? (
        <div className="rounded-xl bg-zinc-50 px-4 py-12 text-center">
          <p className="text-lg font-semibold text-zinc-800 sm:text-xl">
            No products found
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Try another product name or category.
          </p>

          <button
            type="button"
            onClick={() => setActiveTab("All")}
            className="mt-4 rounded-full bg-[#FF5F1F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            View All Products
          </button>
        </div>
      ) : (
        <ProductGrid
          products={filteredItems}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
          wishlist={wishlist}
        />
      )}

      {/* Product Count */}
      {filteredItems.length > 0 && (
        <p className="mt-6 text-center text-xs text-zinc-500 sm:mt-8 sm:text-sm">
          Showing {filteredItems.length}{" "}
          {filteredItems.length === 1 ? "product" : "products"}
        </p>
      )}
    </section>
  );
};

export default Product;
