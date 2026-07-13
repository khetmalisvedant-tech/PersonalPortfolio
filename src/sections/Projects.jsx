import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "../components/Reveal";
import { projects } from "../data/content";

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-py * 8}deg) rotateY(${px * 10}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  return (
    <Reveal delay={index * 0.1}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="border-gradient glass group relative h-full overflow-hidden rounded-2xl p-8 transition-transform duration-300 ease-out will-change-transform"
      >
        <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-violet-500/10">
          <span className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-white/20">
            0{index + 1}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-xs text-cyan-400">
          {project.role} · {project.period}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="section-label">Projects</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Things I&apos;ve <span className="text-gradient">built.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}