import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./img/logo.png";
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = ({
  handleScroll,
  setSearchTerm,
  isScrolled,
  handlePanel,
  totalItems,
  wishlist = [],
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Track Order", path: "/track-order" },
    { name: "My Account", path: "/account" },
    { name: "Shipping & Returns", path: "/shipping-returns" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap text-sm font-medium transition-colors ${
      isActive ? "text-[#FF5F1F]" : "text-zinc-700 hover:text-[#FF5F1F]"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 bg-white ${
        isScrolled ? "shadow-md" : "border-b border-zinc-100"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-3 lg:min-h-[88px]">

          {/* StyleStore Logo */}
          <Link
            to="/"
            aria-label="StyleStore Home"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 items-center gap-2"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5F1F] text-white shadow-sm transition hover:bg-orange-600 sm:h-12 sm:w-12">
              <HiShoppingBag className="text-2xl sm:text-3xl" />
            </span>

            <span className="text-xl font-extrabold tracking-tight text-zinc-900 sm:text-2xl">
              Style<span className="text-[#FF5F1F]">Store</span>
            </span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            {links.slice(0, 4).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={navLinkClass}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="group relative">
              <button
                type="button"
                className="text-sm font-medium text-zinc-700 transition hover:text-[#FF5F1F]"
              >
                More Pages <span aria-hidden="true">⌄</span>
              </button>

              <div className="invisible absolute right-0 top-full z-50 w-60 translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-xl border border-zinc-100 bg-white p-2 shadow-xl">
                  {links.slice(4).map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 text-sm transition ${
                          isActive
                            ? "bg-orange-50 font-semibold text-[#FF5F1F]"
                            : "text-zinc-700 hover:bg-orange-50 hover:text-[#FF5F1F]"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Search and Actions */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <form
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                handleScroll?.();
              }}
              className="flex w-[125px] items-center rounded-full border border-zinc-300 p-1 transition focus-within:border-[#FF5F1F] min-[400px]:w-[150px] sm:w-[210px] lg:w-[190px] xl:w-[230px]"
            >
              <input
                type="search"
                name="search"
                placeholder="Search..."
                autoComplete="off"
                onChange={(e) => setSearchTerm?.(e.target.value)}
                className="h-8 w-full min-w-0 flex-1 bg-transparent pl-2 text-sm outline-none placeholder:text-zinc-400 sm:pl-3"
              />
              <button
                type="submit"
                aria-label="Search products"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF5F1F] text-white transition hover:bg-orange-600"
              >
                <IoSearch />
              </button>
            </form>

            {/* Wishlist */}
            <button
              type="button"
              onClick={() => handlePanel("wishlist")}
              aria-label="Open wishlist"
              className="relative shrink-0 text-xl text-zinc-800 transition hover:text-[#FF5F1F] sm:text-2xl"
            >
              <GoHeartFill />
              {wishlist.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF5F1F] px-1 text-xs text-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              type="button"
              onClick={() => handlePanel("cart")}
              aria-label="Open shopping cart"
              className="relative shrink-0 text-2xl text-zinc-800 transition hover:text-[#FF5F1F]"
            >
              <HiShoppingBag />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF5F1F] px-1 text-xs text-white">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="shrink-0 text-2xl text-zinc-800 transition hover:text-[#FF5F1F] lg:hidden"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="max-h-[65vh] overflow-y-auto border-t border-zinc-100 py-3 lg:hidden">
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-orange-50 text-[#FF5F1F]"
                        : "text-zinc-700 hover:bg-orange-50 hover:text-[#FF5F1F]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
