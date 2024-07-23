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
      <head>
        <title>Descord</title>
        <meta name="description" content="Descord is a minimal Rust library that provides a simple and efficient way to interact with the Discord API." />
        <meta property="og:title" content="Descord" />
        <meta property="og:description" content="Descord is a minimal Rust library that provides a simple and efficient way to interact with the Discord API." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://descord.vercel.app" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </head>
      <body className="justify-center items-center">
        {children}
      </body>
    </html>
  );
}
