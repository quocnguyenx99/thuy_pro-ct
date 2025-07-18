"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Xử lý hiệu ứng khi cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Đóng mobile menu khi click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const hamburger = document.getElementById('hamburger-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (mobileMenuOpen && 
          !hamburger?.contains(event.target) && 
          !mobileMenu?.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Đóng mobile menu khi thay đổi route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Các mục menu chính
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Report", path: "/report" },
    { name: "Career", path: "/career" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white shadow-md"
          : "py-4 bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src={"/images/thaco_logo.png"}
              alt="Vietnam Silicon Logo"
              width={170}
              height={40}
              priority
              className="h-5 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const isActive =
                item.path === "/" ? pathname === "/" : pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`
                      group relative px-1 py-2 font-medium text-base transition-colors duration-200
                      ${isActive ? "font-medium" : ""}
                      ${
                        scrolled
                          ? isActive
                            ? "text-primary"
                            : "text-primary"
                          : isActive
                          ? "text-white"
                          : "text-white"
                      }
                    `}
                  >
                    <span
                      className={`
                        transition-colors duration-200
                        ${
                          scrolled
                            ? isActive
                              ? "text-primary group-hover:text-primary"
                              : "text-primary group-hover:text-primary"
                            : isActive
                            ? "text-white group-hover:text-white"
                            : "text-white group-hover:text-white"
                        }
                      `}
                    >
                      {item.name}
                    </span>
                    {/* Gạch dưới chân */}
                    <span
                      className={`
                        pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5
                        transition-all duration-300
                        ${
                          isActive
                            ? scrolled
                              ? "bg-primary w-full"
                              : "bg-white w-full"
                            : "bg-transparent w-0"
                        }
                        group-hover:w-16
                        ${scrolled ? "group-hover:bg-primary" : "group-hover:bg-white"}
                        group-hover:left-1/2 group-hover:-translate-x-1/2
                      `}
                      style={{
                        transitionProperty: "width, background-color",
                      }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Contact Button */}
          <Link
            href="/contact"
            className="hidden md:block ml-8 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-md font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>

          {/* Hamburger Button */}
          <button 
            id="hamburger-button"
            className={`ml-4 md:hidden p-2 rounded-md transition-colors duration-200 ${
              scrolled 
                ? 'text-primary hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-lg border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Mobile Navigation Links */}
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const isActive =
                  item.path === "/" ? pathname === "/" : pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-50 text-primary border-l-4 border-primary'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            {/* Mobile Contact Button */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
