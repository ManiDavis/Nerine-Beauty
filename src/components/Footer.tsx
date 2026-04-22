import Link from "next/link";
import Image from "next/image";

const brandLogos = [
  { src: "/images/guinot.png", alt: "Guinot Institut Paris", width: 110, height: 55 },
  { src: "/images/bio-sculpture.png", alt: "Bio Sculpture", width: 140, height: 55 },
  { src: "/images/nouveau-lashes.png", alt: "Nouveau Lashes & LVL", width: 160, height: 55 },
  { src: "/images/sensory-retreats.png", alt: "Sensory Retreats", width: 130, height: 55 },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-300">
      <div className="mx-auto max-w-7xl px-8 lg:px-12 pt-14 pb-10">
        {/* Logo + Brand logos row */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Nerine Beauty logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Nerine Beauty"
                width={160}
                height={90}
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Divider — vertical on desktop */}
          <div className="hidden lg:block w-px h-16 bg-navy-700" />

          {/* Brand logos */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-10">
            {brandLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-11 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-navy-800" />

        {/* Legal */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-sans text-xs tracking-widest uppercase text-cream-400 hover:text-gold-400 transition-colors"
            >
              Privacy &amp; Cookie Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs tracking-widest uppercase text-cream-400 hover:text-gold-400 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
          <p className="font-sans text-xs text-cream-500 sm:ml-auto">
            © {new Date().getFullYear()} Nerine Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
