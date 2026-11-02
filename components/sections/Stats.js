import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section className="bg-ink py-16 lg:py-20">
      <Container>
        <Reveal stagger className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter value={stat.value} suffix={stat.suffix} className="font-display text-4xl font-extrabold text-amber sm:text-5xl lg:text-6xl" />
              <p className="mt-2 text-sm text-white/75 sm:text-base">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
