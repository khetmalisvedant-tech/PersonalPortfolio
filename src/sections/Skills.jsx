import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { skillGroups, softSkills } from "../data/content";

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-2 flex justify-between font-display text-sm text-white/70">
        <span>{name}</span>
        <span className="text-cyan-400">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="section-label">Skills</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Tools I reach for <span className="text-gradient">every day.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.08}>
            <div className="border-gradient glass h-full rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="mb-6 font-display text-lg font-semibold text-white">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.1} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12">
        <h3 className="mb-5 font-display text-lg font-semibold text-white/80">Soft Skills</h3>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
            >
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
