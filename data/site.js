import { FileCheck2, Plane, BedDouble, CarFront } from "lucide-react";

export const brand = "Fahad's Travel Agency";

export const navLinks = [
  { label: "Book", href: "#book" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Visa services",
    text: "Document checks, appointment booking and application tracking for over 90 countries.",
    icon: FileCheck2,
    tab: "Tourist, business and transit visas",
  },
  {
    title: "Flight tickets",
    text: "Compare fares across airlines and lock in the best departure time for your route.",
    icon: Plane,
    tab: "Domestic and international routes",
  },
  {
    title: "Hotel booking",
    text: "Hand-picked stays from city apartments to beach resorts, with free cancellation options.",
    icon: BedDouble,
    tab: "Over 4,000 verified properties",
  },
  {
    title: "Car rental",
    text: "Economy cars, SUVs and chauffeur-driven vehicles ready at the airport or your hotel.",
    icon: CarFront,
    tab: "Pickup in 60 cities",
  },
];

export const destinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    price: 620,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    price: 540,
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Bali",
    country: "Indonesia",
    price: 780,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Paris",
    country: "France",
    price: 890,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Santorini",
    country: "Greece",
    price: 940,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Tokyo",
    country: "Japan",
    price: 1050,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=70",
  },
];

export const stats = [
  { value: 12000, suffix: "+", label: "Happy travelers" },
  { value: 90, suffix: "+", label: "Visa countries" },
  { value: 4000, suffix: "+", label: "Partner hotels" },
  { value: 98, suffix: "%", label: "Visa approval rate" },
];

export const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Schengen tourist visa",
    text: "They checked every document before submission and my visa came through in nine days. No back and forth, no stress.",
    rating: 5,
  },
  {
    name: "Daniel Foster",
    role: "Business trip to Dubai",
    text: "Flights, hotel and an airport car were all sorted in one chat. I saved hours compared with booking each separately.",
    rating: 5,
  },
  {
    name: "Sara Malik",
    role: "Family holiday in Bali",
    text: "The hotel they suggested was exactly what we needed with two kids. The pickup driver was waiting when we landed.",
    rating: 4,
  },
];

export const contactInfo = [
  { label: "Call us", value: "+92 21 3456 7890", icon: "phone" },
  { label: "Email", value: "hello@fahadstravelagency.com", icon: "mail" },
  { label: "Visit", value: "Clifton Block 5, Karachi", icon: "pin" },
];

export const footerGroups = [
  {
    title: "Services",
    links: ["Visa services", "Flight tickets", "Hotel booking", "Car rental"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "Contact"],
  },
  {
    title: "Support",
    links: ["Help centre", "Cancellation policy", "Privacy", "Terms"],
  },
];
