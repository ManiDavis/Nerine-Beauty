"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/40"
            : "bg-transparent"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            >
              {/* Logo image — replace src with /images/logo.png once you have it */}
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl text-gold-400 tracking-wide">
                  nerine
                </span>
                <span className="font-script text-xl text-gold-300 -mt-1 ml-4">
                  beauty
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Menu button */}
          <motion.button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 rounded-full bg-cream-300 px-5 py-2 font-sans text-sm font-medium tracking-wider text-navy-800 transition-all hover:bg-cream-200 hover:shadow-md active:scale-95"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Open menu"
          >
            menu
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <polyline points="5,2 10,7 5,12" />
            </svg>
          </motion.button>
        </div>
      </motion.header>

      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
