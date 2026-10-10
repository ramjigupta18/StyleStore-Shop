import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useShop } from "./context/ShopContext";

const SharedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { totalItems, wishlist } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("product-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#product-section";
    }
  };

  const handlePanel = (panel) => {
    window.dispatchEvent(
      new CustomEvent("open-shop-panel", {
        detail: panel,
      })
    );
  };

  return (
    <Navbar
      handleScroll={handleScroll}
      setSearchTerm={setSearchTerm}
      isScrolled={isScrolled}
      handlePanel={handlePanel}
      totalItems={totalItems}
      wishlist={wishlist}
    />
  );
};

export default SharedNavbar;
