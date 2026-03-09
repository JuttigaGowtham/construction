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

        // Prevent scroll when mobile menu is open
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "HOME", href: "#home", id: "home" },
        { name: "ABOUT", href: "#about", id: "about" },
        { name: "SERVICES", href: "#services", id: "services" },
        { name: "PROJECTS", href: "#projects", id: "projects" },
        { name: "CONTACT", href: "#contact", id: "contact" },
    ];

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren",
            },
        },
        open: {
            x: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                when: "beforeChildren",
            },
        },
    };

    const itemVariants = {
        closed: { y: 20, opacity: 0 },
        open: { y: 0, opacity: 1 },
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${mobileMenuOpen
                ? "border-transparent bg-transparent py-3"
                : isScrolled
                    ? "bg-white/90 backdrop-blur-md py-3 border-black/10 shadow-sm"
                    : "bg-white/50 backdrop-blur-sm py-6 border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[101]">
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
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none z-[101]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <motion.span
                        animate={{
                            rotate: mobileMenuOpen ? 45 : 0,
                            y: mobileMenuOpen ? 7 : 0,
                            width: mobileMenuOpen ? "24px" : "20px"
                        }}
                        className="h-0.5 bg-black block origin-center"
                    ></motion.span>
                    <motion.span
                        animate={{
                            opacity: mobileMenuOpen ? 0 : 1,
                            x: mobileMenuOpen ? 10 : 0
                        }}
                        className="w-6 h-0.5 bg-black block"
                    ></motion.span>
                    <motion.span
                        animate={{
                            rotate: mobileMenuOpen ? -45 : 0,
                            y: mobileMenuOpen ? -7 : 0,
                            width: mobileMenuOpen ? "24px" : "12px"
                        }}
                        className="h-0.5 bg-black block origin-center self-end"
                    ></motion.span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-white z-[100] flex flex-col md:hidden"
                    >
                        {/* Background Decorative Element */}
                        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                            <span className="absolute -right-20 -top-20 text-[60vh] font-black text-black leading-none">
                                STRUX
                            </span>
                        </div>

                        <div className="flex-1 flex flex-col justify-center px-10 space-y-10 relative z-10">
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link) => (
                                    <motion.div key={link.name} variants={itemVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`text-5xl font-black tracking-tighter uppercase transition-colors flex items-center group ${activeSection === link.id ? "text-[#ff4d00]" : "text-black"
                                                }`}
                                        >
                                            <span className="mr-4 text-xs font-bold tracking-widest text-black/20 group-hover:text-[#ff4d00] transition-colors">
                                                {link.id === "home" ? "01" : link.id === "about" ? "02" : link.id === "services" ? "03" : link.id === "projects" ? "04" : "05"}
                                            </span>
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div variants={itemVariants} className="pt-10 border-t border-black/5">
                                <Link
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="inline-flex items-center space-x-4 bg-black text-white px-8 py-4 text-xs font-bold tracking-widest hover:bg-[#ff4d00] transition-colors"
                                >
                                    <span>GET A QUOTE</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg>
                                </Link>

                                <div className="mt-12 flex space-x-6 text-[10px] font-bold tracking-widest text-black/40">
                                    <a href="#" className="hover:text-black transition-colors uppercase">Instagram</a>
                                    <a href="#" className="hover:text-black transition-colors uppercase">LinkedIn</a>
                                    <a href="#" className="hover:text-black transition-colors uppercase">Twitter</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
