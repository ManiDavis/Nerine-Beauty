"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/treatments", label: "Treatments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.nav
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-navy-900 px-10 py-8 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="ml-auto mb-12 text-gold-400 hover:text-gold-300 transition-colors"
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="6" y1="6" x2="22" y2="22" />
                <line x1="22" y1="6" x2="6" y2="22" />
              </svg>
            </button>

            {/* Links */}
            <ul className="flex flex-col gap-2 flex-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`block font-serif text-4xl py-3 border-b border-navy-700 transition-colors ${
                      pathname === link.href
                        ? "text-gold-400"
                        : "text-cream-200 hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Bottom info */}
            <motion.div
              className="mt-auto pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <p className="font-sans text-sm text-gold-500 tracking-widest uppercase mb-2">
                Guernsey
              </p>
              <p className="font-sans text-cream-300 text-sm">
                La Sabri, Vale Avenue, Vale GY3 5TF
              </p>
              <a
                href="tel:01481244114"
                className="block font-sans text-cream-200 text-sm mt-1 hover:text-gold-400 transition-colors"
              >
                01481 244114
              </a>
              <a
                href="mailto:annemlemaitre@cwgsy.net"
                className="block font-sans text-cream-200 text-sm hover:text-gold-400 transition-colors"
              >
                annemlemaitre@cwgsy.net
              </a>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
