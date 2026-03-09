"use client";

import React from "react";
import { motion } from "framer-motion";
import HomeSection from "./home/page";
import About from "./about/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

const SectionWrapper = ({ id, children }: { id: string, children: React.ReactNode }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="scroll-mt-20 overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default function RootPage() {
  return (
    <div className="flex flex-col">
      <SectionWrapper id="home">
        <HomeSection />
      </SectionWrapper>

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="services">
        <Services />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </div>
  );
}