"use client";

import React from "react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-white text-black font-sans selection:bg-[#ff4d00] selection:text-white pt-20">
            {/* Hero Header */}
            <section className="h-[60vh] flex items-center bg-white overflow-hidden relative border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                    <div className="inline-flex items-center space-x-3 mb-6 animate-fadeIn">
                        <span className="h-[1px] w-12 bg-black/20"></span>
                        <span className="text-black/40 text-[10px] font-bold tracking-[0.4em] uppercase">
                            ABOUT STRUX GROUP
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-[10rem] font-black text-black leading-none tracking-tighter animate-slideUp">
                        WE BUILD <br />
                        <span className="text-transparent border-[#ff4d00] stroke-text-orange font-outline">STRENGTH.</span>
                    </h1>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="py-40 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold tracking-tight">Our Legacy</h2>
                                <div className="h-[2px] w-12 bg-[#ff4d00]"></div>
                            </div>
                            <p className="text-xl font-light text-gray-500 leading-relaxed">
                                Founded in 1994, STRUX began as a small structural firm with a singular
                                focus on industrial excellence. Today, we are global leaders in technical
                                construction, managing projects that redefine cityscapes.
                            </p>
                            <p className="text-xl font-light text-gray-400 leading-relaxed">
                                We believe that construction is not just about assembly; it's about
                                engineering the future through meticulous planning and a deep respect
                                for architectural integrity.
                            </p>
                        </div>
                        <div className="relative aspect-square grayscale border border-black/5 overflow-hidden">
                            <Image
                                src="/detail.png"
                                alt="Architectural Detail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-white py-40 border-y border-black/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-0 border-t border-black/5">
                        {[
                            { val: "INTEGRITY", desc: "Honesty is the foundation of every structure we create, ensuring transparency at every stage." },
                            { val: "MASTERY", desc: "We constantly push the boundaries of materials and structural engineering." },
                            { val: "SAFETY", desc: "Our 'Zero-Harm' culture is non-negotiable, protecting our people and the community." }
                        ].map((item, i) => (
                            <div key={i} className="p-12 border-b border-black/5 md:border-r last:border-r-0 hover:bg-[#ff4d00] group transition-colors duration-700">
                                <span className="text-black/10 text-4xl font-black group-hover:text-white/20 transition-colors">0{i + 1}</span>
                                <h4 className="text-xl font-bold tracking-tight mt-6 mb-4 group-hover:text-white transition-colors">{item.val}</h4>
                                <p className="text-gray-400 font-light leading-relaxed group-hover:text-white transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Spotlight */}
            <section className="py-40 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-square grayscale border border-black/5 overflow-hidden">
                            <Image
                                src="/leader.png"
                                alt="Elias Sterling Leader"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold tracking-tight">Our Leadership</h2>
                                <div className="h-[2px] w-12 bg-[#ff4d00]"></div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-black tracking-tight">Elias Sterling</h3>
                                <p className="text-[#ff4d00] text-xs font-bold tracking-widest uppercase">Lead Strategist & Founder</p>
                                <p className="text-xl font-light text-gray-500 leading-relaxed">
                                    "We don't build boxes; we build dialogues with the skyline.
                                    Precision is our only language."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
