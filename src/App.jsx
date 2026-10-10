import React from "react";
import { Routes, Route } from "react-router-dom";
import { ShopProvider } from "./Components/context/ShopContext";

import Home from "./Components/Home";
import ProductDetails from "./Components/pages/ProductDetails";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import FAQ from "./Components/pages/FAQ";
import ShippingReturns from "./Components/pages/ShippingReturns";
import Privacy from "./Components/pages/Privacy";
import Terms from "./Components/pages/Terms";
import TrackOrder from "./Components/pages/TrackOrder";
import Account from "./Components/pages/Account";
import NotFound from "./Components/pages/NotFound";

import SiteFooter from "./Components/layout/SiteFooter";

function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <SiteFooter />
    </ShopProvider>
  );
}

export default App;
