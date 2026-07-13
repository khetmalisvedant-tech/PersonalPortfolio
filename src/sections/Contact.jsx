import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import { profile } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    return e;
  };

  const handleChange = (field) => (ev) =>
    setForm((f) => ({ ...f, [field]: ev.target.value }));

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("sending");
    try {
      // Wire up EmailJS here with your service/template/public keys:
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      await new Promise((res) => setTimeout(res, 900));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-32">
      <Reveal className="text-center">
        <p className="section-label">Contact</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Let&apos;s build <span className="text-gradient">something.</span>
        </h2>
        <p className="mt-4 text-white/60">
          Reach out at <a href={`mailto:${profile.email}`} className="text-cyan-400">{profile.email}</a>
          {" "}· {profile.phone} · {profile.location}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="border-gradient glass mt-12 rounded-3xl p-8 md:p-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-display text-sm text-white/70">Name</label>
              <input
                value={form.name}
                onChange={handleChange("name")}
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-400"
              />
              {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
            </div>
            <div>
              <label className="mb-2 block font-display text-sm text-white/70">Email</label>
              <input
                value={form.email}
                onChange={handleChange("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-400"
              />
              {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-display text-sm text-white/70">Message</label>
            <textarea
              value={form.message}
              onChange={handleChange("message")}
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-400"
            />
            {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <MagneticButton
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 font-display text-sm font-semibold text-[#050816] glow disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </MagneticButton>

            {status === "sent" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-emerald-400"
              >
                Message sent — thank you!
              </motion.span>
            )}
            {status === "error" && (
              <span className="text-sm text-rose-400">Something went wrong. Try again.</span>
            )}
          </div>
        </form>
      </Reveal>
    </section>
  );
}