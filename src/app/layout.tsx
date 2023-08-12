import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { v2 as cloudinary } from "cloudinary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Spice",
  description: "Pixel Spice Portfolio",
};

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
