import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inder",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepSeek - Clone",
  description:
    "Clone de deepSeek dans le but de comprend l'API de DeepSeek et comment l'integre dans une app nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
