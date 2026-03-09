import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Home from "./home/page";
import About from "./about/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STRUX. | Modern Construction Solutions",
  description: "Building the future with precision and excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
        <main>
          {/* {children} */}
        </main>
      </body>
    </html>
  );
}

