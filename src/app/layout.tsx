import type { Metadata } from "next";
import { Inter, Outfit, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Deep Dimensions | Enterprise AI & Data Solutions",
  description: "Build custom AI agents, data warehouses, and secure web apps. Deep Dimensions delivers enterprise-grade tech with speed and precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${orbitron.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
