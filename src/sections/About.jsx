import Reveal from "../components/Reveal";
import { profile, education, languages } from "../data/content";

const points = [
  "First-year B.E. Computer Science/IT student, GPA 8.55/10.0.",
  "Hands-on experience in full-stack development and AI integration.",
  "Led teams to Round 2 in the Economic Times Hackathon (top 15%).",
  "Seeking an internship to contribute to challenging projects.",
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="section-label">About</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Building at the intersection of <span className="text-gradient">AI &amp; software.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-white/70">{profile.goal}</p>

          <div className="mt-8 border-gradient glass rounded-2xl p-6">
            <h3 className="font-display text-base font-semibold text-white">{education.degree}</h3>
            <p className="mt-1 text-sm text-cyan-400">{education.institute}</p>
            <p className="mt-1 text-sm text-white/50">
              {education.year} &middot; {education.graduation} &middot; {education.gpa}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span key={c} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="space-y-4">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_8px_2px_rgba(59,130,246,0.6)]" />
                <span className="text-white/70">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white/50">
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((l) => (
                <span
                  key={l.name}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                >
                  {l.name} <span className="text-cyan-400">· {l.level}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}