import Link from "next/link";

const brands = [
  "Guinot",
  "Bio Sculpture",
  "Nouveau Lashes",
  "LVL",
  "Sensory Retreats",
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-3xl text-gold-400 block leading-none">
                nerine
              </span>
              <span className="font-script text-2xl text-gold-300 ml-4">
                beauty
              </span>
            </div>
            <p className="font-sans text-sm text-cream-400 leading-relaxed max-w-xs">
              Expert beauty treatments in the heart of Guernsey. Where luxury
              meets expertise.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-5">
              Navigate
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/treatments", label: "Treatments" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-5">
              Find Us
            </h3>
            <address className="not-italic font-sans text-sm text-cream-300 leading-relaxed space-y-1">
              <p>La Sabri, Vale Avenue</p>
              <p>Vale, Guernsey GY3 5TF</p>
              <a
                href="tel:01481244114"
                className="block mt-3 hover:text-gold-400 transition-colors"
              >
                01481 244114
              </a>
              <a
                href="mailto:annemlemaitre@cwgsy.net"
                className="block hover:text-gold-400 transition-colors"
              >
                annemlemaitre@cwgsy.net
              </a>
            </address>
          </div>
        </div>

        {/* Brands */}
        <div className="mt-14 pt-10 border-t border-navy-800">
          <p className="font-sans text-xs tracking-widest uppercase text-gold-600 mb-6 text-center">
            Our Premium Partners
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((b) => (
              <span
                key={b}
                className="font-sans text-sm font-medium tracking-wider text-cream-400 uppercase"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 pt-6 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream-500">
            © {new Date().getFullYear()} Nerine Beauty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-sans text-xs text-cream-500 hover:text-gold-400 transition-colors tracking-wider uppercase"
            >
              Privacy & Cookie Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs text-cream-500 hover:text-gold-400 transition-colors tracking-wider uppercase"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
