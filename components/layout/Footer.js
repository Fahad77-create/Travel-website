import Link from "next/link";
import { Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import { brand, footerGroups } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="#top" className="flex items-center gap-2 font-display text-2xl font-bold">
            <Compass className="h-7 w-7 text-amber" />
            {brand}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Visas, flights, hotels and cars arranged by one team, so your trip starts the moment you decide to go.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link}>
                  <Link href="#top" className="text-sm text-white/65 transition-colors hover:text-amber">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {brand} Travel. All rights reserved.</p>
          <p>Demo project with mock data. No real bookings are made.</p>
        </Container>
      </div>
    </footer>
  );
}
