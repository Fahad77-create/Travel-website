import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import HoverCard from "@/components/ui/HoverCard";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <Container>
        <SectionHeading title="Trips that went the way they should" text="Real feedback from people who booked with us this year." />
        <Reveal stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <HoverCard key={item.name} lift={-6} className="flex flex-col rounded-3xl border border-ink/10 bg-white p-8 transition-shadow hover:shadow-lift">
              <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className={`h-5 w-5 ${index < item.rating ? "fill-amber text-amber" : "text-ink/20"}`} />
                ))}
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-ink/80">{item.text}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky font-display font-bold text-white">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-ink/60">{item.role}</p>
                </div>
              </div>
            </HoverCard>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
