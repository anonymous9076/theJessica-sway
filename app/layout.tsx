import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--next-font-playfair",
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--next-font-great-vibes",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--next-font-inter",
});

export const metadata: Metadata = {
  title: "The Jessica's Way",
  description: "Personalized guidance and coaching to unlock your full potential.",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${greatVibes.variable} ${inter.variable} antialiased`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <Container>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
