import { FileCheck2, Plane, BedDouble, CarFront } from "lucide-react";

const cities = ["Dubai", "Istanbul", "London", "Paris", "Singapore", "Bangkok", "New York"];
const origins = ["Karachi", "Lahore", "Islamabad"];
const toOptions = (list) => [{ label: "Any", value: "" }, ...list.map((item) => ({ label: item, value: item }))];
const includes = (value, target) => !value || value === target;

const visas = [
  { country: "United Arab Emirates", type: "Tourist", days: 3, validity: "30 days", price: 95 },
  { country: "United Arab Emirates", type: "Business", days: 4, validity: "60 days", price: 140 },
  { country: "Turkey", type: "Tourist", days: 2, validity: "90 days", price: 60 },
  { country: "United Kingdom", type: "Tourist", days: 21, validity: "6 months", price: 180 },
  { country: "United Kingdom", type: "Business", days: 21, validity: "6 months", price: 210 },
  { country: "France", type: "Tourist", days: 15, validity: "90 days", price: 120 },
  { country: "France", type: "Transit", days: 10, validity: "5 days", price: 70 },
  { country: "Singapore", type: "Tourist", days: 5, validity: "30 days", price: 55 },
  { country: "Thailand", type: "Tourist", days: 6, validity: "60 days", price: 50 },
  { country: "United States", type: "Business", days: 45, validity: "10 years", price: 250 },
];

const flights = [
  ["Karachi", "Dubai", "Emirates", "08:15", "10:00", "2h 45m", "Direct", 210],
  ["Karachi", "Dubai", "Air Arabia", "14:40", "16:25", "2h 45m", "Direct", 165],
  ["Karachi", "Istanbul", "Turkish Airlines", "03:30", "07:55", "6h 25m", "Direct", 430],
  ["Karachi", "London", "British Airways", "09:05", "13:40", "8h 35m", "Direct", 690],
  ["Karachi", "Singapore", "Singapore Airlines", "22:10", "06:30", "6h 20m", "Direct", 520],
  ["Lahore", "Dubai", "Emirates", "11:20", "13:30", "3h 10m", "Direct", 230],
  ["Lahore", "Bangkok", "Thai Airways", "01:50", "08:15", "5h 25m", "Direct", 380],
  ["Lahore", "Paris", "Qatar Airways", "04:20", "13:10", "9h 50m", "1 stop", 640],
  ["Islamabad", "Dubai", "flydubai", "06:45", "09:05", "3h 20m", "Direct", 195],
  ["Islamabad", "London", "PIA", "02:10", "07:15", "7h 05m", "Direct", 720],
  ["Islamabad", "New York", "Qatar Airways", "20:30", "08:50", "17h 20m", "1 stop", 980],
  ["Karachi", "Paris", "Qatar Airways", "05:50", "14:25", "9h 35m", "1 stop", 610],
].map(([from, to, airline, depart, arrive, duration, stops, price]) => ({
  from, to, airline, depart, arrive, duration, stops, price,
}));

const hotels = [
  { name: "Marina Skyline Hotel", city: "Dubai", stars: 5, rating: 9.2, price: 180 },
  { name: "Palm Court Suites", city: "Dubai", stars: 4, rating: 8.7, price: 110 },
  { name: "Bosphorus View Residence", city: "Istanbul", stars: 4, rating: 8.9, price: 95 },
  { name: "Old City Boutique", city: "Istanbul", stars: 3, rating: 8.4, price: 62 },
  { name: "Kensington Row Hotel", city: "London", stars: 5, rating: 9.0, price: 260 },
  { name: "Soho Studio Stay", city: "London", stars: 3, rating: 8.2, price: 120 },
  { name: "Maison Montmartre", city: "Paris", stars: 4, rating: 9.1, price: 175 },
  { name: "Garden Bay Resort", city: "Singapore", stars: 5, rating: 9.3, price: 230 },
  { name: "Sukhumvit Loft", city: "Bangkok", stars: 4, rating: 8.6, price: 70 },
  { name: "Midtown Grand", city: "New York", stars: 4, rating: 8.5, price: 285 },
];

const cars = [
  { name: "Toyota Yaris", city: "Dubai", type: "Economy", seats: 5, price: 32 },
  { name: "Nissan Patrol", city: "Dubai", type: "SUV", seats: 7, price: 105 },
  { name: "Mercedes E-Class", city: "Dubai", type: "Luxury", seats: 5, price: 160 },
  { name: "Renault Clio", city: "Paris", type: "Economy", seats: 5, price: 38 },
  { name: "Peugeot 5008", city: "Paris", type: "SUV", seats: 7, price: 85 },
  { name: "Fiat Egea", city: "Istanbul", type: "Economy", seats: 5, price: 29 },
  { name: "Mercedes Vito", city: "Istanbul", type: "Van", seats: 8, price: 90 },
  { name: "Range Rover Sport", city: "London", type: "Luxury", seats: 5, price: 210 },
  { name: "Toyota Corolla", city: "Singapore", type: "Economy", seats: 5, price: 55 },
  { name: "Honda CR-V", city: "Bangkok", type: "SUV", seats: 5, price: 60 },
];

export const searchTabs = [
  {
    id: "visa",
    label: "Visa",
    icon: FileCheck2,
    fields: [
      { name: "country", label: "Destination country", type: "select", options: toOptions([...new Set(visas.map((v) => v.country))]) },
      { name: "type", label: "Visa type", type: "select", options: toOptions(["Tourist", "Business", "Transit"]) },
      { name: "date", label: "Planned travel date", type: "date" },
    ],
    items: visas,
    match: (item, v) => includes(v.country, item.country) && includes(v.type, item.type),
    toCard: (item) => ({
      id: `${item.country}-${item.type}`,
      title: `${item.country} ${item.type.toLowerCase()} visa`,
      subtitle: `Valid for ${item.validity}`,
      meta: [`${item.days} days processing`, "Document check included"],
      price: item.price,
      unit: "per applicant",
      action: "Apply now",
    }),
  },
  {
    id: "flights",
    label: "Flights",
    icon: Plane,
    fields: [
      { name: "from", label: "From", type: "select", options: toOptions(origins) },
      { name: "to", label: "To", type: "select", options: toOptions(cities) },
      { name: "date", label: "Departure date", type: "date" },
      { name: "passengers", label: "Passengers", type: "select", options: [1, 2, 3, 4].map((n) => ({ label: `${n} passenger${n > 1 ? "s" : ""}`, value: String(n) })) },
    ],
    items: flights,
    match: (item, v) => includes(v.from, item.from) && includes(v.to, item.to),
    toCard: (item) => ({
      id: `${item.from}-${item.to}-${item.airline}-${item.depart}`,
      title: `${item.from} to ${item.to}`,
      subtitle: item.airline,
      meta: [`${item.depart} to ${item.arrive}`, item.duration, item.stops],
      price: item.price,
      unit: "per person",
      action: "Select flight",
    }),
  },
  {
    id: "hotels",
    label: "Hotels",
    icon: BedDouble,
    fields: [
      { name: "city", label: "City", type: "select", options: toOptions(cities) },
      { name: "checkIn", label: "Check in", type: "date" },
      { name: "checkOut", label: "Check out", type: "date" },
      { name: "guests", label: "Guests", type: "select", options: [1, 2, 3, 4, 5].map((n) => ({ label: `${n} guest${n > 1 ? "s" : ""}`, value: String(n) })) },
    ],
    items: hotels,
    match: (item, v) => includes(v.city, item.city),
    toCard: (item) => ({
      id: item.name,
      title: item.name,
      subtitle: `${item.city}, ${item.stars} star hotel`,
      meta: [`Guest rating ${item.rating}`, "Free cancellation"],
      price: item.price,
      unit: "per night",
      action: "View rooms",
    }),
  },
  {
    id: "cars",
    label: "Car rental",
    icon: CarFront,
    fields: [
      { name: "city", label: "Pickup city", type: "select", options: toOptions(cities) },
      { name: "type", label: "Car type", type: "select", options: toOptions(["Economy", "SUV", "Luxury", "Van"]) },
      { name: "pickup", label: "Pickup date", type: "date" },
      { name: "dropoff", label: "Return date", type: "date" },
    ],
    items: cars,
    match: (item, v) => includes(v.city, item.city) && includes(v.type, item.type),
    toCard: (item) => ({
      id: `${item.name}-${item.city}`,
      title: item.name,
      subtitle: `${item.type} in ${item.city}`,
      meta: [`${item.seats} seats`, "Unlimited mileage"],
      price: item.price,
      unit: "per day",
      action: "Reserve car",
    }),
  },
];
