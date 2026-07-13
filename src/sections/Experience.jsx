import Reveal from "../components/Reveal";
import { experience, timeline } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="section-label">Experience</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Where the <span className="text-gradient">learning happens.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {experience.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="glass h-full rounded-2xl border border-white/10 p-7 transition-colors hover:border-blue-400/40">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <span className="text-xs text-cyan-400">{item.period}</span>
              </div>
              <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-24">
        <h3 className="mb-12 font-display text-2xl font-bold text-white">My Timeline</h3>
        <div className="relative border-l border-white/10 pl-8">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.1} y={16} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_10px_3px_rgba(59,130,246,0.6)]" />
              <p className="font-display text-sm font-semibold text-cyan-400">{t.year}</p>
              <p className="mt-1 text-white/70">{t.label}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
