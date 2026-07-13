import Reveal from "../components/Reveal";
import { recognitions } from "../data/content";

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-32">
      <Reveal className="text-center">
        <p className="section-label">Recognition</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Results from the <span className="text-gradient">last year.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {recognitions.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.1}>
            <div className="border-gradient glass h-full rounded-2xl p-7">
              <h3 className="font-display text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-400">{r.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{r.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}