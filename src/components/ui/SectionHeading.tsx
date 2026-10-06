type SectionHeadingProps = {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        {index && (
          <span
            className={`font-display text-xs font-semibold tracking-[0.2em] ${
              light ? "text-white/50" : "text-azul-delta/60"
            }`}
          >
            {index}
          </span>
        )}
        {eyebrow && (
          <span
            className={`text-xs font-medium uppercase tracking-[0.18em] ${
              light ? "text-white/70" : "text-azul-delta"
            }`}
          >
            {eyebrow}
          </span>
        )}
      </div>
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-delta-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/80" : "text-delta-mute"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
