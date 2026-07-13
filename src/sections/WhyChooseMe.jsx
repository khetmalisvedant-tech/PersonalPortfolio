import Reveal from "../components/Reveal";
import { whyChooseMe } from "../data/content";

export default function WhyChooseMe() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="section-label">Why Choose Me</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          What I bring to <span className="text-gradient">the table.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {whyChooseMe.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <div className="border-gradient glass h-full rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-display text-lg font-semibold text-cyan-300">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
