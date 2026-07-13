import Reveal from "../components/Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="section-label">Services</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          What I can <span className="text-gradient">help with.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-violet-500/10">
              <span className="mb-4 block h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 opacity-80 transition-opacity group-hover:opacity-100" />
              <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
