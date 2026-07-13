import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import { profile } from "../data/content";

const letters = (text) =>
  text.split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 24, rotateX: -60 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: 0.4 + i * 0.03, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="section-label mb-6"
        >
          Hello, I&apos;m
        </motion.p>

        <div className="relative mb-8">
          <div className="float">
            <div className="relative h-36 w-36 rounded-full sm:h-44 sm:w-44">
              <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#3B82F6,#06B6D4,#8B5CF6,#3B82F6)] opacity-70 blur-md spin-slow" />
              <div className="absolute inset-0 overflow-hidden rounded-full border border-white/20 bg-[#0B1120]">
                <img
                  src="https://res.cloudinary.com/m82ytfuz/image/upload/f_auto,q_auto/me2_jjz16v.jpg"
                  alt="Vedant S. Khetmalis"
                  className="h-full w-full object-cover"
                />
              </div>
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(6,182,212,0.8)]"
                  style={{
                    top: `${50 + 46 * Math.sin((i / 6) * Math.PI * 2)}%`,
                    left: `${50 + 46 * Math.cos((i / 6) * Math.PI * 2)}%`,
                    animation: `float ${4 + i}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {letters(profile.name)}
        </h1>

        <div className="mt-6 h-10 font-display text-xl text-white/70 sm:text-2xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="text-gradient font-semibold"
            >
              {profile.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 max-w-xl text-balance text-sm text-white/60 sm:text-base"
        >
          {profile.goal}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            as="a"
            href="/resume.pdf"
            download
            className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-3 font-display text-sm font-semibold text-[#050816] glow"
          >
            Download Resume
          </MagneticButton>
          <MagneticButton
            as="button"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border border-white/20 px-7 py-3 font-display text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-400"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            as="button"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border border-white/20 px-7 py-3 font-display text-sm font-semibold text-white hover:border-violet-400 hover:text-violet-400"
          >
            Hire Me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-9 w-5 rounded-full border border-white/20 p-1">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-cyan-400"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
