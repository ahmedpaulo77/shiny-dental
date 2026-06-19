import { useScrollReveal } from "../hooks/useScrollReveal";

function RevealOnScroll({ children, animation = "fade-up", delay = 0, className = "" }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${animation} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;