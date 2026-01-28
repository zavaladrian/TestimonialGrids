import Image from "next/image";
import type { Testimonial } from "./testimonialsData";

const variantStyles: Record<Testimonial["variant"], string> = {
  daniel:
    "bg-violet-600 text-white relative overflow-hidden",
  jonathan:
    "bg-slate-600 text-white",
  jeanette:
    "bg-white text-slate-900",
  patrick:
    "bg-slate-900 text-white",
  kira:
    "bg-white text-slate-900",
};

const avatarBorder: Record<Testimonial["variant"], string> = {
  daniel: "ring-2 ring-white/35",
  jonathan: "ring-2 ring-white/35",
  patrick: "ring-2 ring-white/35",
  jeanette: "ring-2 ring-black/10",
  kira: "ring-2 ring-black/10",
};

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className={[
        "rounded-xl p-7 shadow-xl",
        "flex flex-col gap-4",
        variantStyles[t.variant],
      ].join(" ")}
    >
      {/* Quotation background for Daniel */}
      {t.variant === "daniel" && (
        <Image
          src="/images/bg-pattern-quotation.svg"
          alt=""
          width={104}
          height={102}
          className="pointer-events-none absolute right-8 top-0 opacity-40"
          priority
        />
      )}

      <header className="flex items-center gap-4 relative z-10">
        <Image
          src={t.image}
          alt={t.name}
          width={34}
          height={34}
          className={[
            "rounded-full",
            avatarBorder[t.variant],
          ].join(" ")}
        />
        <div className="leading-tight">
          <p className="font-semibold text-[0.95rem]">{t.name}</p>
          <p className="text-[0.8rem] opacity-55">{t.role}</p>
        </div>
      </header>

      <h2 className="text-xl font-semibold leading-snug relative z-10">
        {t.headline}
      </h2>

      <p className="text-[0.92rem] opacity-70 relative z-10">
        “ {t.quote} ”
      </p>
    </article>
  );
}
