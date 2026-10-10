import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({
  products = [],
  addToCart,
  addToWishlist,
  wishlist = [],
}) => {
  if (products.length === 0) {
    return (
      <div className="w-full py-12 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          No Products Found
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Try changing your search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
          wishlist={wishlist}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
