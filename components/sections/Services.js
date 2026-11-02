import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import HoverCard from "@/components/ui/HoverCard";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Four services, one team"
          text="Skip the juggling between agents. Everything your trip needs is handled under one roof."
        />
        <Reveal stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, text, icon: Icon, tab }) => (
            <HoverCard key={title} className="group rounded-3xl border border-ink/10 bg-white p-7 transition-shadow duration-300 hover:shadow-lift">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-white transition-colors duration-300 group-hover:bg-amber group-hover:text-ink">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{text}</p>
              <p className="mt-5 border-t border-ink/10 pt-4 text-xs font-medium text-sky">{tab}</p>
            </HoverCard>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
