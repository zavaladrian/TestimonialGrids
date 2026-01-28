import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

const placement: Record<string, string> = {
  // mobile = natural stack
  // desktop (lg+) = explicit layout to match design
  daniel: "lg:col-span-2",
  jonathan: "lg:col-start-3 lg:col-span-1",
  kira: "lg:col-start-4 lg:row-span-2",
  jeanette: "lg:col-start-1 lg:row-start-2",
  patrick: "lg:col-start-2 lg:col-span-2 lg:row-start-2",
};

export default function TestimonialsGrid() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.id} className={placement[t.id] ?? ""}>
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
