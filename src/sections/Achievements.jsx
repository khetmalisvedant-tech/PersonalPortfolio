import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { achievements } from "../data/content";

export default function Achievements() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="border-gradient glass grid gap-10 rounded-3xl p-10 sm:grid-cols-2 md:grid-cols-4 md:p-14">
        {achievements.map((a, i) => (
          <Reveal key={a.label} delay={i * 0.1} className="text-center">
            <Counter value={a.value} />
            <p className="mt-2 font-display text-sm uppercase tracking-wide text-white/50">
              {a.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
