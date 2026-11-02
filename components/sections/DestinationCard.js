import { MapPin } from "lucide-react";
import HoverCard from "@/components/ui/HoverCard";

export default function DestinationCard({ destination }) {
  const { name, country, price, image } = destination;

  return (
    <HoverCard lift={-6} className="relative h-96 overflow-hidden rounded-3xl bg-gradient-to-br from-sky to-ink">
      <img
        data-zoom
        src={image}
        alt={`${name}, ${country}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
        <div>
          <h3 className="font-display text-3xl font-bold">{name}</h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-white/80">
            <MapPin className="h-4 w-4" />
            {country}
          </p>
        </div>
        <p className="rounded-2xl bg-amber px-4 py-2 text-right text-ink">
          <span className="block text-xs font-medium">from</span>
          <span className="font-display text-xl font-bold">${price}</span>
        </p>
      </div>
    </HoverCard>
  );
}
