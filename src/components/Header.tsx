"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
            : "bg-navy-900/80 backdrop-blur-sm"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center px-6 lg:px-10 relative">
          {/* Logo — centered */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Image
                src="/images/logo.png"
                alt="Nerine Beauty"
                width={140}
                height={80}
                className="h-16 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Hamburger menu button — right */}
          <motion.button
            onClick={() => setMenuOpen(true)}
            className="ml-auto flex flex-col gap-[6px] group py-2 pl-2"
            whileHover="hover"
            aria-label="Open menu"
          >
            <motion.span
              className="block h-px bg-gold-400 group-hover:bg-gold-300 transition-colors"
              style={{ width: 28 }}
              variants={{ hover: { width: 22 } }}
              transition={{ duration: 0.2 }}
            />
            <span
              className="block h-px bg-gold-400 group-hover:bg-gold-300 transition-colors"
              style={{ width: 28 }}
            />
            <motion.span
              className="block h-px bg-gold-400 group-hover:bg-gold-300 transition-colors"
              style={{ width: 20 }}
              variants={{ hover: { width: 28 } }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      </motion.header>

      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
