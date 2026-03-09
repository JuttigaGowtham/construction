"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "#home" },
        { name: "ABOUT", href: "#about" },
        { name: "SERVICES", href: "#services" },
        { name: "PROJECTS", href: "#projects" },
        { name: "CONTACT", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                ? "bg-white/90 backdrop-blur-md py-3 border-black/10"
                : "bg-white/50 backdrop-blur-sm py-6 border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 flex items-center justify-center transition-colors duration-300 bg-black">
                        <div className="w-4 h-4 border-2 transform rotate-45 group-hover:rotate-90 transition-all duration-500 border-[#ff4d00]"></div>
                    </div>
                    <span className="text-2xl font-black tracking-tighter transition-colors duration-300 text-black">
                        STRUX<span className="text-[#ff4d00]">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    <div className="flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold tracking-[0.2em] transition-all relative group text-black/60 hover:text-[#ff4d00] uppercase font-outline"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-[#ff4d00]"></span>
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="#contact"
                        className="group relative px-6 py-3 overflow-hidden border border-black text-black transition-all duration-300"
                    >
                        <div className="absolute inset-0 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 bg-[#ff4d00]"></div>
                        <span className="relative text-xs font-bold tracking-widest transition-colors duration-300 group-hover:text-white uppercase">
                            GET A QUOTE
                        </span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden flex flex-col space-y-1.5"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-black tracking-widest text-black hover:text-[#ff4d00] transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-4 px-10 py-4 bg-[#ff4d00] text-white text-sm font-bold tracking-widest hover:bg-black transition-colors shadow-lg"
                >
                    GET A QUOTE
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
