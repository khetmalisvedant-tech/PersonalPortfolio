import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { socials, profile } from "../data/content";

const iconMap = { FaGithub, FaLinkedin, FaEnvelope };

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <span className="font-display text-2xl font-bold">
          VK<span className="text-gradient">.</span>
        </span>

        <div className="flex flex-wrap justify-center gap-5">
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-white/60 transition-colors hover:border-blue-400 hover:text-blue-400"
        >
          <FaArrowUp size={12} /> Back to top
        </button>

        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}