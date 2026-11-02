import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DestinationCard from "@/components/sections/DestinationCard";
import { destinations } from "@/data/site";

export default function Destinations() {
  return (
    <section id="destinations" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Where travelers are heading"
          text="Package prices include return flights and three nights in a partner hotel."
        />
        <Reveal stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
