"use client";

import React from "react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="bg-white text-black font-sans selection:bg-[#ff4d00] selection:text-white pt-20">
            {/* Hero Header */}
            <section className="py-24 px-6 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="inline-flex items-center space-x-3 mb-8 animate-fadeIn">
                        <span className="h-[1px] w-12 bg-black/20"></span>
                        <span className="text-black/40 text-[10px] font-bold tracking-[0.4em] uppercase">
                            START A CONVERSATION
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-[8rem] font-black text-black tracking-tighter leading-none mb-12">
                        PROJECT <br />
                        <span className="text-transparent border-[#ff4d00] stroke-text-orange font-outline">INQUIRY.</span>
                    </h1>
                    <p className="max-w-xl text-xl font-light text-gray-500 leading-relaxed">
                        Whether you're planning a skyline landmark or a technical industrial
                        facility, our partners are ready to discuss your vision.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-32 px-6 bg-[#f8f8f8]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24">
                        {/* Contact Form */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-black text-black uppercase tracking-tight">New Project Inquiry</h2>
                                <div className="h-[2px] w-12 bg-[#ff4d00]"></div>
                            </div>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. John Doe"
                                            className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-[#ff4d00] transition-colors font-light text-black placeholder:text-black/10"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="e.g. john@company.com"
                                            className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-[#ff4d00] transition-colors font-light text-black placeholder:text-black/10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Project Type</label>
                                    <select className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-[#ff4d00] transition-colors font-light appearance-none text-black">
                                        <option>Infrastructure</option>
                                        <option>Commercial</option>
                                        <option>Industrial</option>
                                        <option>Residential</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold tracking-widest text-black/40 uppercase">Project Brief</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Describe your vision..."
                                        className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-[#ff4d00] transition-colors font-light resize-none text-black placeholder:text-black/10"
                                    ></textarea>
                                </div>

                                <button className="group relative px-12 py-5 bg-[#ff4d00] text-white text-xs font-bold tracking-[0.4em] uppercase overflow-hidden transition-all duration-500 shadow-xl shadow-orange-500/20">
                                    <span className="relative z-10">Send Proposition</span>
                                    <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </button>
                            </form>
                        </div>

                        {/* Office Info & Image */}
                        <div className="space-y-16">
                            <div className="aspect-[4/5] relative grayscale border border-black/5 overflow-hidden group">
                                <Image
                                    src="/contact.png"
                                    alt="Global HQ"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                {/* Technical Tag Overlay */}
                                <div className="absolute bottom-10 left-10 bg-white p-8 space-y-4 shadow-2xl">
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-bold tracking-widest text-[#ff4d00] uppercase">Global HQ</div>
                                        <h3 className="text-2xl font-black text-black tracking-tight">One Sterling Plaza, NY</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-12">
                                <div className="space-y-4 px-6">
                                    <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/20">Liaison</h4>
                                    <div className="text-sm font-medium text-black space-y-1">
                                        <p>contact@strux.group</p>
                                        <p>press@strux.group</p>
                                    </div>
                                </div>
                                <div className="space-y-4 px-6 md:border-l border-black/5">
                                    <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/20">Working Hours</h4>
                                    <div className="text-sm font-medium text-black space-y-1">
                                        <p>Mon — Fri</p>
                                        <p>09:00 — 18:00 EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
