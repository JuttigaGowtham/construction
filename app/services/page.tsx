"use client";

import React from "react";
import Image from "next/image";

export default function ServicesPage() {
    const services = [
        {
            id: "01",
            title: "CIVIL INFRASTRUCTURE",
            description: "Large-scale urban mobility projects including bridges, tunnels, and sustainable transit systems.",
            tags: ["BRIDGES", "TUNNELS", "TRANSIT"],
            image: "/civil.png"
        },
        {
            id: "02",
            title: "COMMERCIAL REALTY",
            description: "High-spec corporate headquarters and multi-use retail environments built for high-density occupancy.",
            tags: ["OFFICE", "RETAIL", "MIXED-USE"],
            image: "/commercial.png"
        },
        {
            id: "03",
            title: "INDUSTRIAL SCALE",
            description: "Advanced manufacturing plants, logistical hubs, and technical facilities with specialized structural needs.",
            tags: ["PLANTS", "HUB", "ADVANCED"],
            image: "/crane.png"
        },
        {
            id: "04",
            title: "GREEN ENGINEERING",
            description: "Digital twin modeling and BIM-driven strategy for risk mitigation and architectural optimization.",
            tags: ["BIM", "STRATEGY", "BEYOND"],
            image: "/green.png"
        }
    ];

    return (
        <div className="bg-white text-black font-sans selection:bg-[#ff4d00] selection:text-white pt-20">
            {/* Header Section */}
            <section className="py-24 px-6 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="inline-flex items-center space-x-3 mb-8 animate-fadeIn">
                        <span className="h-[1px] w-12 bg-black/20"></span>
                        <span className="text-black/40 text-[10px] font-bold tracking-[0.4em] uppercase">
                            CAPABILITIES & EXPERTISE
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-[8rem] font-black text-black tracking-tighter leading-none mb-12">
                        TECHNICAL <br />
                        <span className="text-transparent border-[#ff4d00] stroke-text-orange font-outline">MASTERY.</span>
                    </h1>
                    <p className="max-w-2xl text-xl font-light text-gray-500 leading-relaxed">
                        We provide a diverse range of construction and engineering services unified by
                        a single principle: absolute precision. From foundations to
                        high-tech industrial facilities.
                    </p>
                </div>
            </section>

            {/* Services List Section */}
            <section className="bg-white text-black">
                <div className="max-w-7xl mx-auto px-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group border-b border-black/5 py-20 flex flex-col lg:flex-row gap-16 items-center hover:bg-[#ff4d00]/5 transition-colors duration-500"
                        >
                            <div className="lg:w-1/3 relative aspect-video grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden border border-black/5">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="lg:w-2/3 space-y-6">
                                <div className="flex items-center gap-6">
                                    <span className="text-4xl font-black text-black/10 group-hover:text-[#ff4d00] transition-colors duration-500">
                                        {service.id}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter group-hover:text-[#ff4d00] transition-colors duration-500">
                                        {service.title}
                                    </h2>
                                </div>
                                <p className="text-gray-400 font-light leading-relaxed text-lg max-w-2xl">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[10px] border border-[#ff4d00]/30 group-hover:border-[#ff4d00] px-3 py-1 font-bold tracking-[0.2em] transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
