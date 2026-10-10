import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: "All Products", path: "/" },
    { name: "Men's Collection", path: "/" },
    { name: "Women's Collection", path: "/" },
    { name: "Kids' Collection", path: "/" },
  ];

  const helpLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQs", path: "/faq" },
    { name: "Track Order", path: "/track-order" },
  ];

  const legalLinks = [
    { name: "Shipping & Returns", path: "/shipping-returns" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="mt-auto bg-zinc-950 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Stay in the loop!
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
              Discover new styles, latest collections and shopping updates.
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 focus-within:border-[#FF5F1F]"
          >
            <FaEnvelope className="ml-3 shrink-0 text-gray-400" />

            <input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email address for newsletter"
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-gray-500"
            />

            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF5F1F] text-white transition hover:bg-orange-600 sm:h-11 sm:w-11"
            >
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5F1F] text-xl text-white">
              <FaShoppingBag />
            </span>

            <span className="text-2xl font-extrabold tracking-wide text-white">
              Style<span className="text-[#FF5F1F]">Store</span>
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
            Your destination for discovering stylish clothing and
            everyday fashion for men, women and kids.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#FF5F1F] hover:bg-[#FF5F1F] hover:text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#FF5F1F] hover:bg-[#FF5F1F] hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#FF5F1F] hover:bg-[#FF5F1F] hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-bold text-white">Shop</h3>

          <ul className="mt-5 space-y-3">
            {shopLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 transition hover:text-[#FF5F1F]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-lg font-bold text-white">Customer Care</h3>

          <ul className="mt-5 space-y-3">
            {helpLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 transition hover:text-[#FF5F1F]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-5 space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-[#FF5F1F]" />
              <span>Email us for assistance</span>
            </li>

            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 shrink-0 text-[#FF5F1F]" />
              <span>Customer support</span>
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-[#FF5F1F]" />
              <span>Online shopping, wherever you are</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-white">Information</h3>

          <ul className="mt-5 space-y-3">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 transition hover:text-[#FF5F1F]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/account"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF5F1F] transition hover:text-orange-400"
          >
            My Account <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-xs text-gray-500 sm:text-sm">
            © {currentYear} StyleStore. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 sm:text-sm">
            Made for a better shopping experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
