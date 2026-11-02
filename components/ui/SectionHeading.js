import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({ title, text, align = "center", light = false }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <Reveal stagger y={24} className={`max-w-2xl ${alignment}`}>
      <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-ink/70"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
