import React from "react";
import {
  FaHeart,
  FaShoppingBag,
  FaTrash,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const Wishlist = ({
  activePanel,
  handleClose,
  wishlist,
  addToCart,
  clearWishlist,
}) => {
  const formatPrice = (price) =>
    `$${(Number(price) || 0).toFixed(2)}`;

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          activePanel === "wishlist"
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Wishlist Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your wishlist"
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-full max-w-full flex-col overflow-hidden border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 sm:w-[420px] lg:w-[460px] ${
          activePanel === "wishlist"
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-7">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              <FaHeart className="text-orange-500" />
              My Wishlist
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {wishlist.length}{" "}
              {wishlist.length === 1 ? "saved item" : "saved items"}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close wishlist"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-orange-100 hover:text-orange-600"
          >
            <FaTimes />
          </button>
        </div>

        {/* Wishlist Products */}
        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-6">
          {wishlist.length === 0 ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                <FaHeart className="text-3xl" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Your wishlist is empty
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                Save your favorite products here and find them whenever
                you need them.
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Products
                <FaArrowRight />
              </button>
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 p-3 transition hover:border-orange-200 sm:gap-4 sm:p-4"
              >
                {/* Product Image */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white sm:h-28 sm:w-28">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                {/* Product Details */}
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-900 sm:text-base">
                        {product.name}
                      </h3>

                      {product.addedDate && (
                        <p className="mt-1 text-xs text-gray-500">
                          Added: {product.addedDate}
                        </p>
                      )}
                    </div>

                    <FaHeart
                      className="mt-1 shrink-0 text-sm text-orange-500"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Price */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-base font-bold text-orange-600 sm:text-lg">
                      {formatPrice(product.price)}
                    </span>

                    {product.onSale &&
                      Number(product.oldPrice) > Number(product.price) && (
                        <span className="text-xs text-gray-400 line-through">
                          {formatPrice(product.oldPrice)}
                        </span>
                      )}
                  </div>

                  {/* Actions */}
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 sm:text-sm"
                  >
                    <FaShoppingBag />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-100 bg-white px-5 py-4 sm:px-7">
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 rounded-full border border-gray-300 px-3 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Continue Shopping
            </button>

            <button
              type="button"
              onClick={clearWishlist}
              disabled={wishlist.length === 0}
              className="flex items-center justify-center gap-2 rounded-full bg-red-50 px-3 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaTrash />
              Clear All
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-gray-400">
            Your favorite products, all in one place.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Wishlist;
