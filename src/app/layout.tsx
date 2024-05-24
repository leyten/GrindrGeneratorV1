import type { Metadata } from "next";
import { Chau_Philomene_One, Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const ChauPhilomeneOne = Chau_Philomene_One({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ChauPhilomeneOne" 
});

export const metadata: Metadata = {
  title: "Profile Generator",
  description: "$GRINDR Profile Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ChauPhilomeneOne.variable} font-sans`}>{children}</body>
    </html>
  );
}
