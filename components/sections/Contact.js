import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { contactInfo } from "@/data/site";

const icons = { phone: Phone, mail: Mail, pin: MapPin };

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            title="Tell us where you want to go"
            text="Send a message and an advisor will reply within one working day with options and prices."
          />
          <Reveal stagger className="mt-10 space-y-6">
            {contactInfo.map(({ label, value, icon }) => {
              const Icon = icons[icon];
              return (
                <div key={label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky/10 text-sky">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-ink/60">{label}</p>
                    <p className="font-semibold text-ink">{value}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
        <Reveal className="rounded-3xl bg-paper p-6 sm:p-8">
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
