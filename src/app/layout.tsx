import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nerine Beauty | Expert Beauty Treatments in Guernsey",
    template: "%s | Nerine Beauty",
  },
  description:
    "Nerine Beauty offers expert beauty treatments in Vale, Guernsey — including Guinot facials, A-Lift, lash treatments, massages and more.",
  keywords: ["beauty salon", "Guernsey", "Guinot", "facial", "lashes", "massage", "Vale"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
