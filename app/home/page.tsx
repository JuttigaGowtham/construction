"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    return (
        <div className="bg-white text-black font-sans selection:bg-[#ff4d00] selection:text-white">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden border-b border-black/5">
                <div className="absolute top-0 right-0 w-[60%] h-full z-0 overflow-hidden grayscale opacity-20">
                    <Image
                        src="/hero.png"
                        alt="Modern Construction Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center space-x-3 mb-8 animate-fadeIn">
                            <span className="h-[1px] w-12 bg-black/20"></span>
                            <span className="text-black/40 text-[10px] font-bold tracking-[0.4em] uppercase">
                                STRUX CONSTRUCTION GROUP
                            </span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black text-black leading-[0.85] tracking-tighter mb-10 animate-slideUp">
                            BUILDING <br />
                            <span className="text-transparent border-[#ff4d00] stroke-text-orange font-outline">LEGACIES.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed max-w-xl mb-12 animate-fadeInDelay">
                            From skyscrapers to industrial complexes, we combine surgical precision with
                            visionary engineering to construct the landmarks of tomorrow.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 animate-fadeInDelay2">
                            <Link
                                href="#projects"
                                className="group relative px-12 py-5 bg-[#ff4d00] text-white text-sm font-bold tracking-widest overflow-hidden transition-all duration-500 shadow-xl shadow-orange-500/20"
                            >
                                <div className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                <span className="relative z-10 uppercase text-white group-hover:text-white">Our Projects</span>
                            </Link>
                            <Link
                                href="#services"
                                className="px-12 py-5 border border-black/10 text-black text-sm font-bold tracking-widest hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all duration-300"
                            >
                                SERVICES
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
