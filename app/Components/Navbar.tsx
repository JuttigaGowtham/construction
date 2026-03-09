"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ["home", "about", "services", "projects", "contact"];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: "HOME", href: "#home", id: "home" },
        { name: "ABOUT", href: "#about", id: "about" },
        { name: "SERVICES", href: "#services", id: "services" },
        { name: "PROJECTS", href: "#projects", id: "projects" },
        { name: "CONTACT", href: "#contact", id: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
                ? "bg-white/90 backdrop-blur-md py-3 border-black/10 shadow-sm"
                : "bg-white/50 backdrop-blur-sm py-6 border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 flex items-center justify-center transition-colors duration-300 bg-black">
                        <motion.div
                            animate={{ rotate: activeSection === "home" ? 90 : 45 }}
                            className="w-4 h-4 border-2 transform rotate-45 group-hover:rotate-90 transition-all duration-500 border-[#ff4d00]"
                        ></motion.div>
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
                                className={`text-[10px] font-bold tracking-[0.3em] transition-all relative group uppercase ${activeSection === link.id ? "text-[#ff4d00]" : "text-black/40 hover:text-black"
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#ff4d00]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="#contact"
                        className="group relative px-6 py-3 overflow-hidden border border-black text-black transition-all duration-300"
                    >
                        <div className="absolute inset-0 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 bg-[#ff4d00]"></div>
                        <span className="relative text-[10px] font-bold tracking-widest transition-colors duration-300 group-hover:text-white uppercase">
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
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-4xl font-black tracking-widest uppercase transition-colors ${activeSection === link.id ? "text-[#ff4d00]" : "text-black"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 px-10 py-4 bg-[#ff4d00] text-white text-sm font-bold tracking-widest hover:bg-black transition-colors shadow-xl"
                        >
                            GET A QUOTE
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
