import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0,
      mouseY = 0,
      ringX = 0,
      ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    let raf;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden md:block">
      <div
        ref={ringRef}
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/50 mix-blend-screen"
      />
      <div
        ref={dotRef}
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_4px_rgba(59,130,246,0.8)]"
      />
    </div>
  );
}
