"use client";

import { logout } from "@/Redux/user/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.user) || {};
  const { user } = loginUser;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/Login");
  };

  return (
    <nav className="bg-green-800 fixed top-0 w-full border-b border-gray-200 dark:bg-gray-900 z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl px-4 py-3 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo/ecme.png" className="h-8" alt="AZshop Logo" />
          <span className="text-2xl font-semibold">AZshop</span>
        </Link>

        {/* Mobile burger menu */}
        <div className="flex items-center space-x-4">
          {/* Panier visible même en mobile */}
          <Link href="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>

          {/* Burger pour mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex flex-row font-medium space-x-8 text-xl">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Produits
              </Link>
            </li>
          </ul>

          {/* Search */}
          <form className="max-w-md w-full hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search products..."
              />
              <button
                type="submit"
                className="absolute right-2 bottom-1.5 bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800 text-sm"
              >
                Search
              </button>
            </div>
          </form>

          {/* Utilisateur connecté */}
          {user ? (
            <select
              onChange={(e) => {
                if (e.target.value === "logout") handleLogout(e);
                if (e.target.value === "dashboard") router.push("/dashboard");
              }}
              className="rounded border py-2 px-3 bg-white text-black focus:outline-none"
            >
              <option value="profile">Profile</option>
              <option value="dashboard">Menu</option>
              <option value="logout">Déconnexion</option>
            </select>
          ) : (
            <div className="flex items-center space-x-5">
              <Link href="/Register" className="text-sm text-blue-400 hover:underline">
                Inscription
              </Link>
              <Link href="/Login" className="text-sm text-blue-400 hover:underline">
                Connection
              </Link>
            </div>
          )}
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="w-full md:hidden mt-4 space-y-4">
            <ul className="flex flex-col font-medium space-y-4 text-lg">
              <li>
                <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline" onClick={() => setMenuOpen(false)}>
                  Produits
                </Link>
              </li>
            </ul>

            {/* Utilisateur mobile */}
            {user ? (
              <div className="flex flex-col space-y-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/dashboard");
                    setMenuOpen(false);
                  }}
                  className="bg-white text-black rounded px-3 py-2"
                >
                  Dashboard
                </button>
                <button
                  onClick={(e) => {
                    handleLogout(e);
                    setMenuOpen(false);
                  }}
                  className="bg-red-500 text-white rounded px-3 py-2"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link href="/Register" className="text-blue-400 hover:underline" onClick={() => setMenuOpen(false)}>
                  Sign up
                </Link>
                <Link href="/Login" className="text-blue-400 hover:underline" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;