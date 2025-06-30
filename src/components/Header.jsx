"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Xử lý hiệu ứng khi cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          <Link
            href="/contact"
            className="ml-8 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-md font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>

          {/* Hamburger menu cho mobile - có thể thêm vào sau */}
          <button className="ml-4 md:hidden p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
