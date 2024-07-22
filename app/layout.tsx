import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Descord",
  description: "Descord is a minimal Rust library that provides a simple and efficient way to interact with the Discord API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="justify-center items-center">
        {children}
      </body>
    </html>
  );
}
