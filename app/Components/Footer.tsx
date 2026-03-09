"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white text-black pt-24 pb-12 border-t border-black/5 selection:bg-[#ff4d00] selection:text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-8">
                        <Link href="/" className="text-4xl font-black tracking-tighter text-black">
                            STRUX<span className="text-[#ff4d00]">.</span>
                        </Link>
                        <p className="text-black/40 font-light text-lg max-w-sm leading-relaxed">
                            Pioneering the next generation of industrial and commercial infrastructure
                            with surgical precision and visionary engineering.
                        </p>
                        <div className="flex space-x-6">
                            {["INSTAGRAM", "LINKEDIN", "TWITTER"].map((social) => (
                                <Link
                                    key={social}
                                    href="#"
                                    className="text-[10px] font-bold tracking-[0.2em] text-black/40 hover:text-[#ff4d00] transition-colors"
                                >
                                    {social}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/20">Navigate</h4>
                        <div className="flex flex-col space-y-4">
                            {["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "HOME" ? "#home" : `#${item.toLowerCase()}`}
                                    className="text-sm font-medium text-black/60 hover:text-[#ff4d00] hover:translate-x-2 transition-all duration-300 inline-block uppercase"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/20">Inquiries</h4>
                        <div className="space-y-4">
                            <p className="text-sm font-medium leading-relaxed text-black/60">
                                One Sterling Plaza, NY<br />
                                contact@strux.group
                            </p>
                            <div className="pt-4">
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center space-x-3 group"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-[#ff4d00] text-black">Get a Quote</span>
                                    <div className="w-8 h-[1px] bg-[#ff4d00] group-hover:w-12 transition-all duration-300"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] font-bold tracking-[0.4em] text-black/10 uppercase">
                        © 2024 STRUX CONSTRUCTION GROUP — ALL RIGHTS RESERVED
                    </div>
                    <div className="flex space-x-8 text-[10px] font-bold tracking-[0.2em] text-black/20 uppercase">
                        <Link href="#" className="hover:text-black transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-black transition-colors">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
