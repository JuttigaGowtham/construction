"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
    const projects = [
        {
            title: "VERTICAL HORIZON",
            location: "SINGAPORE",
            category: "COMMERCIAL",
            year: "2024",
            image: "/project1.png"
        },
        {
            title: "IRON SPAN",
            location: "SAN FRANCISCO",
            category: "INFRASTRUCTURE",
            year: "2023",
            image: "/project2.png"
        },
        {
            title: "KINETIC PLANT",
            location: "BERLIN",
            category: "INDUSTRIAL",
            year: "2024",
            image: "/project3.png"
        },
        {
            title: "BRUTALIST VILLA",
            location: "ZURICH",
            category: "RESIDENTIAL",
            year: "2023",
            image: "/project4.png"
        },
        {
            title: "SKY GARDEN",
            location: "LONDON",
            category: "COMMERCIAL",
            year: "2024",
            image: "/commercial.png"
        },
        {
            title: "HARBOR DYNAMICS",
            location: "DUBAI",
            category: "INFRASTRUCTURE",
            year: "2023",
            image: "/crane.png"
        },
        {
            title: "MODULAR MATRIX",
            location: "TOKYO",
            category: "INDUSTRIAL",
            year: "2024",
            image: "/blueprint.png"
        },
        {
            title: "THERMAL HUB",
            location: "REYKJAVIK",
            category: "GREEN",
            year: "2023",
            image: "/green.png"
        }
    ];

    return (
        <div className="bg-white text-black font-sans selection:bg-[#ff4d00] selection:text-white pt-20">
            {/* Header */}
            <section className="relative py-32 px-6 overflow-hidden bg-white border-b border-black/5">
                <div className="absolute top-0 right-0 w-[50%] h-full z-0 grayscale opacity-10">
                    <Image
                        src="/blueprint.png"
                        alt="Blueprint Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center space-x-3 mb-8 animate-fadeIn">
                                <span className="h-[1px] w-12 bg-black/20"></span>
                                <span className="text-black/40 text-[10px] font-bold tracking-[0.4em] uppercase">
                                    SELECTED WORKS
                                </span>
                            </div>
                            <h1 className="text-7xl md:text-9xl font-black text-black tracking-tighter leading-none">
                                BUILT <br />
                                <span className="text-transparent border-[#ff4d00] stroke-text-orange font-outline">ICONS.</span>
                            </h1>
                        </div>
                        <div className="md:text-right pb-4">
                            <p className="text-gray-400 font-light text-lg max-w-sm ml-auto">
                                A curation of our most challenging and rewardingly complex projects delivered
                                across four continents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-40 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
                        {projects.map((project, index) => (
                            <div key={index} className="group cursor-pointer transition-all duration-700">
                                <div className="relative aspect-[16/10] grayscale group-hover:grayscale-0 overflow-hidden mb-10 transition-all duration-700 border border-black/5">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-6 right-6 px-4 py-1 bg-[#ff4d00] text-white text-[10px] font-bold tracking-widest border border-white/10 group-hover:bg-black transition-colors">
                                        {project.year}
                                    </div>
                                </div>

                                <div className="flex justify-between items-start px-4">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-[10px] font-bold tracking-[0.3em] text-[#ff4d00]/60 uppercase group-hover:text-[#ff4d00]">
                                                {project.category}
                                            </span>
                                            <div className="w-1 h-1 bg-black/10 rounded-full"></div>
                                            <span className="text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase">
                                                {project.location}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter group-hover:text-[#ff4d00] group-hover:translate-x-3 transition-all duration-500">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="pt-2">
                                        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-all duration-500">
                                            <svg
                                                className="w-5 h-5 text-black group-hover:text-white transform -rotate-45 transition-colors"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Intermission */}
            <section className="py-40 bg-[#f8f8f8] text-black overflow-hidden relative selection:bg-[#ff4d00] selection:text-white border-y border-black/5 text-center">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="inline-flex items-center space-x-3 mb-8">
                        <span className="h-[1px] w-12 bg-black/20"></span>
                        <span className="text-black/40 text-[10px] font-bold tracking-[0.4em] uppercase">
                            OUR PHILOSOPHY
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-black tracking-tighter leading-none mb-12">
                        EVERY PROJECT IS A <br />
                        <span className="text-[#ff4d00]">STRUCTURAL DIALOGUE.</span>
                    </h2>
                    <Link
                        href="#services"
                        className="inline-flex items-center space-x-6 group"
                    >
                        <span className="text-sm font-bold tracking-[0.4em] uppercase group-hover:text-[#ff4d00] transition-colors">How we build</span>
                        <div className="w-20 h-[2px] bg-black group-hover:w-32 group-hover:bg-[#ff4d00] transition-all duration-500"></div>
                    </Link>
                </div>
                <div className="absolute inset-0 opacity-5 pattern-grid-black/20"></div>
            </section>
        </div>
    );
}
