import React from "react";
import { GoHeartFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({
  product,
  addToCart,
  addToWishlist,
  wishlist = [],
}) => {
  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4">
      <div className="flex items-start justify-between gap-2">
        <span
          className={`rounded-md px-2 py-1 text-xs font-semibold text-white ${
            product.onSale
              ? "bg-red-500"
              : product.newArrival
              ? "bg-green-600"
              : "invisible"
          }`}
        >
          {product.onSale
            ? "Sale"
            : product.newArrival
            ? "New"
            : "Product"}
        </span>

        <button
          type="button"
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          aria-pressed={isWishlisted}
          onClick={() => addToWishlist(product)}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
            isWishlisted
              ? "bg-red-50 text-red-500"
              : "text-zinc-400 hover:bg-red-50 hover:text-red-500"
          }`}
        >
          <GoHeartFill className="text-xl" />
        </button>
      </div>

      <div className="my-3 flex h-36 items-center justify-center overflow-hidden sm:h-48">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col text-center">
        <h3 className="line-clamp-2 min-h-10 text-sm font-semibold text-zinc-900 sm:text-base">
          {product.name}
        </h3>

        <div className="my-3 flex flex-wrap items-center justify-center gap-2">
          {product.onSale && product.oldPrice != null && (
            <span className="text-xs text-zinc-400 line-through sm:text-sm">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}

          <span className="text-base font-bold text-[#FF5F1F] sm:text-lg">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF5F1F] px-2 py-2.5 text-xs font-semibold text-white transition hover:bg-orange-600 active:scale-95 sm:text-sm"
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
