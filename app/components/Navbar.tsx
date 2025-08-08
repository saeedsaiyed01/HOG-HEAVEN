"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-sm px-2 sm:px-6 lg:px-8 py-2 lg:py-2 mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Hog Heaven Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 xl:gap-12">
            <a
              href="#"
              className="font-balford text-white text-base uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="font-balford text-white text-base uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Catering Menu
            </a>
            <a
              href="#"
              className="font-balford text-white text-base uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Catering Inquiry
            </a>
            <a
              href="#"
              className="font-balford text-white text-base uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Online Ordering
            </a>
            <a
              href="#"
              className="font-balford text-white text-base uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Menu
            </a>
            <a
              href="#"
              className="font-balford text-white text-base uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Online Store
            </a>
            <a
              href="#"
              className="font-balford text-white text-base uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Locations
            </a>
            <a
              href="#"
              className="font-balford text-white text-base uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="font-balford text-white text-base uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              About
            </a>
          </div>

          <div className="hidden md:flex lg:hidden items-center gap-6">
            <a
              href="#"
              className="font-balford text-white text-sm uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="font-balford text-white text-sm uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Menu
            </a>
            <a
              href="#"
              className="font-balford text-white text-sm uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              Catering
            </a>
            <a
              href="#"
              className="font-balford text-white text-sm uppercase tracking-wider hover:text-orange-500 transition-colors"
            >
              About
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:text-orange-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
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
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="#"
                className="font-balford text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider"
              >
                Home
              </a>
              <a
                href="#"
                className="font-balford text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider"
              >
                Catering Menu
              </a>
              <a
                href="#"
                className="font-balford text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider"
              >
                Catering Inquiry
              </a>
              <a
                href="#"
                className="font-balford text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider"
              >
                Online Ordering
              </a>
              <a
                href="#"
                className="font-balford text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider"
              >
                Menu
              </a>
              <a
                href="#"
                className="font-balford text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider"
              >
                Online Store
              </a>
              <a
                href="#"
                className="font-balford text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider"
              >
                Locations
              </a>
              <a
                href="#"
                className="font-balford text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider"
              >
                Events
              </a>
              <a
                href="#"
                className="font-balford text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider"
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
