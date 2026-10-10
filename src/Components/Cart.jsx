import React from "react";
import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaShoppingBag,
  FaArrowRight,
  FaTimes,
  FaTruck,
} from "react-icons/fa";

const Cart = ({
  activePanel,
  handleClose,
  cart,
  removeItem,
  quantityIncrement,
  quantityDecrement,
  subtotal,
  shippingFee,
  orderTotal,
  setOrderSummary,
}) => {
  const formatPrice = (price) =>
    `$${(Number(price) || 0).toFixed(2)}`;

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          activePanel === "cart"
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Cart Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-full max-w-full flex-col overflow-hidden border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 sm:w-[420px] lg:w-[460px] ${
          activePanel === "cart"
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-7">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Your Cart
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {cart.length} {cart.length === 1 ? "product" : "products"} in your bag
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-orange-100 hover:text-orange-600"
          >
            <FaTimes />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-6">
          {cart.length === 0 ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                <FaShoppingBag className="text-3xl" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Your cart is empty
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                Looks like you haven't added anything to your cart yet.
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((product) => (
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

                {/* Product Information */}
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-900 sm:text-base">
                        {product.name}
                      </h3>

                      {product.onSale &&
                        Number(product.oldPrice) > Number(product.price) && (
                          <span className="mt-1 inline-block text-xs font-medium text-gray-400 line-through">
                            {formatPrice(product.oldPrice)}
                          </span>
                        )}
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(product)}
                      aria-label={`Remove ${product.name}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-base font-bold text-orange-600 sm:text-lg">
                      {formatPrice(product.price)}
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-2 py-1">
                      <button
                        type="button"
                        onClick={() => quantityDecrement(product)}
                        disabled={product.quantity <= 1}
                        aria-label={`Decrease quantity of ${product.name}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition hover:bg-orange-50 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <FaMinus className="text-[10px]" />
                      </button>

                      <span className="min-w-4 text-center text-sm font-semibold text-gray-800">
                        {product.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => quantityIncrement(product)}
                        aria-label={`Increase quantity of ${product.name}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition hover:bg-orange-50 hover:text-orange-600"
                      >
                        <FaPlus className="text-[10px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Price Summary */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 bg-white px-5 py-4 sm:px-7">
            <div className="mb-4 flex items-center gap-3 rounded-xl bg-green-50 p-3 text-green-700">
              <FaTruck className="shrink-0 text-xl" />

              <p className="text-xs leading-5 sm:text-sm">
                Shipping is calculated based on your cart quantity.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-3 text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="flex justify-between gap-3 text-gray-600">
                <span>Shipping & Handling</span>
                <span className="font-medium text-gray-900">
                  {formatPrice(shippingFee)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-dashed border-gray-200 pt-3">
                <span className="text-base font-bold text-gray-900">
                  Order Total
                </span>

                <span className="text-xl font-extrabold text-orange-600">
                  {formatPrice(orderTotal)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
              >
                Continue Shopping
              </button>

              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => setOrderSummary(true)}
                className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Checkout
                <FaArrowRight />
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-gray-400">
              Thank you for shopping with us!
            </p>
          </div>
        )}
      </aside>
    </>
  );
};

export default Cart;
