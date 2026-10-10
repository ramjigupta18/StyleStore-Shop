import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ShopContext = createContext(null);

// Safely read saved data from LocalStorage
const getStoredData = (key, fallback = []) => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : fallback;
  } catch (error) {
    console.error(`Unable to read ${key} from LocalStorage`, error);
    return fallback;
  }
};

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => getStoredData("cart"));
  const [wishlist, setWishlist] = useState(() =>
    getStoredData("wishlist")
  );
  const [recentlyViewed, setRecentlyViewed] = useState(() =>
    getStoredData("recentlyViewed")
  );
  const [couponCode, setCouponCode] = useState("");

  // Save data automatically
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(
      "recentlyViewed",
      JSON.stringify(recentlyViewed)
    );
  }, [recentlyViewed]);

  // Cart calculations
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Keep your existing $2 per item shipping rule
  const shippingFee = totalItems * 2;

  const discount =
    couponCode.trim().toUpperCase() === "WELCOME10"
      ? subtotal * 0.1
      : 0;

  const orderTotal = Math.max(
    0,
    subtotal + shippingFee - discount
  );

  // Add product to cart
  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeItem = (product) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== product.id)
    );
  };

  // Change quantity
  const quantityIncrement = (product) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const quantityDecrement = (product) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Wishlist: add or remove
  const addToWishlist = (product) => {
    setWishlist((previousWishlist) => {
      const exists = previousWishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return previousWishlist.filter(
          (item) => item.id !== product.id
        );
      }

      return [
        ...previousWishlist,
        {
          ...product,
          addedDate: new Date().toLocaleDateString("en-GB"),
        },
      ];
    });
  };

  const clearWishlist = () => setWishlist([]);

  // Recently viewed products
  const addRecentlyViewed = (product) => {
    setRecentlyViewed((previousProducts) => [
      product,
      ...previousProducts.filter((item) => item.id !== product.id),
    ].slice(0, 8));
  };

  const clearCart = () => setCart([]);

  const value = useMemo(
    () => ({
      cart,
      setCart,
      wishlist,
      setWishlist,
      recentlyViewed,
      couponCode,
      setCouponCode,
      totalItems,
      subtotal,
      shippingFee,
      discount,
      orderTotal,
      addToCart,
      removeItem,
      quantityIncrement,
      quantityDecrement,
      addToWishlist,
      clearWishlist,
      addRecentlyViewed,
      clearCart,
    }),
    [
      cart,
      wishlist,
      recentlyViewed,
      couponCode,
      totalItems,
      subtotal,
      shippingFee,
      discount,
      orderTotal,
    ]
  );

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used inside ShopProvider");
  }

  return context;
};
