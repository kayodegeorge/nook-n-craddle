import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nook n Craddle",
  description:
    "Looking for professional babysitters? Nook n Craddle offers trusted, reliable, and flexible babysitting services. Find experienced caregivers and book childcare with ease today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
