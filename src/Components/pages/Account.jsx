import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaShoppingBag,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import SharedNavbar from "../SharedNavbar";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      isLogin
        ? "Login demo submitted. Connect authentication to sign in."
        : "Sign-up demo submitted. Connect authentication to create an account."
    );
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setMessage("");
    setFormData({ name: "", email: "", password: "" });
    setShowPassword(false);
  };

  return (
    <main className="flex min-h-[75vh] mt-20 items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">

        <SharedNavbar />

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
        {/* Left Panel */}
        <section className="relative hidden flex-col items-center justify-center overflow-hidden bg-gray-900 px-8 py-12 text-center text-white md:flex lg:px-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/20 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-orange-500/20 blur-2xl" />

          <div className="relative">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500 shadow-lg">
              <FaShoppingBag size={35} />
            </div>

            <h1 className="mt-7 text-3xl font-extrabold lg:text-4xl">
              Style<span className="text-orange-500">Store</span>
            </h1>

            <p className="mt-5 text-sm leading-7 text-gray-300 lg:text-base">
              Discover your favorites, explore new styles, and enjoy a simple
              shopping experience.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-orange-500 hover:bg-orange-500"
            >
              Continue Shopping
            </Link>
          </div>
        </section>

        {/* Form Panel */}
        <section className="px-5 py-9 sm:px-10 sm:py-12 lg:px-12">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-7 md:hidden">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xl font-extrabold text-gray-900"
              >
                <FaShoppingBag className="text-orange-500" />
                Style<span className="text-orange-500">Store</span>
              </Link>
            </div>

            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Welcome to StyleStore
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {isLogin ? "Welcome Back!" : "Create Account"}
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              {isLogin
                ? "Sign in to continue to your account."
                : "Fill in your details to create an account."}
            </p>

            {message && (
              <div
                role="status"
                className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-3 text-sm leading-6 text-orange-800"
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {!isLogin && (
                <div>
                  <label
                    htmlFor="account-name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
                    <FaUser className="shrink-0 text-gray-400" />
                    <input
                      id="account-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                      className="w-full min-w-0 bg-transparent py-3 text-sm outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="account-email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
                  <FaEnvelope className="shrink-0 text-gray-400" />
                  <input
                    id="account-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 bg-transparent py-3 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="account-password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
                  <FaLock className="shrink-0 text-gray-400" />
                  <input
                    id="account-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    minLength={6}
                    required
                    className="w-full min-w-0 bg-transparent py-3 text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="shrink-0 text-gray-400 transition hover:text-orange-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white transition hover:bg-orange-600"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={switchMode}
                className="font-bold text-orange-500 hover:text-orange-600"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>

            <p className="mt-5 text-center text-xs leading-5 text-gray-400">
              Demo interface only. Authentication is not connected yet.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Account;
