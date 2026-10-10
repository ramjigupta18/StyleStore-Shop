import React, { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Banner from './Banner';
import Product from './Product';
import Cart from './Cart';
import Wishlist from './Wishlist';
import OrderSummary from './OrderSummary';
import OrderPlace from './OrderPlace';

import { useShop } from './context/ShopContext';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);

  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Shared cart and wishlist data from ShopContext
  const {
    cart,
    wishlist,
    addToCart,
    removeItem,
    quantityIncrement,
    quantityDecrement,
    addToWishlist,
    clearWishlist,
    totalItems,
    subtotal,
    shippingFee,
    orderTotal,
    clearCart,
  } = useShop();

  // Navbar scroll effect
  useEffect(() => {
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, []);

  // Scroll to products section
  const handleScroll = () => {
    const section = document.getElementById('product-section');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // Open or close cart/wishlist panel
  const handlePanel = (tabName) => {
    setActivePanel((prev) => (
      prev === tabName ? null : tabName
    ));
  };

  // Close active panel
  const handleClose = () => {
    setActivePanel(null);
  };

  // Place order modal
  const handleOrderPlaced = () => {
    setOrderSummary(false);
    setOrderPlaced(true);

    if (typeof clearCart === 'function') {
      clearCart();
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItems={totalItems}
        wishlist={wishlist}
      />

      <Banner />

      <Product
        searchTerm={searchTerm}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlist={wishlist}
      />

      <Cart
        activePanel={activePanel}
        handleClose={handleClose}
        cart={cart}
        removeItem={removeItem}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subtotal={subtotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />

      <Wishlist
        activePanel={activePanel}
        handleClose={handleClose}
        wishlist={wishlist}
        addToCart={addToCart}
        clearWishlist={clearWishlist}
      />

      {orderSummary && (
        <OrderSummary
          cart={cart}
          subtotal={subtotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderPlaced={handleOrderPlaced}
          setOrderSummary={setOrderSummary}
          setCart={() => {
            if (typeof clearCart === 'function') {
              clearCart();
            }
          }}
        />
      )}

      {orderPlaced && (
        <OrderPlace
          setOrderPlaced={setOrderPlaced}
        />
      )}
    </div>
  );
};

export default Home;
