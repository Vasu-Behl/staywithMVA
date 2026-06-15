import {
  AirVent,
  BookOpen,
  Cctv,
  ChefHat,
  Clock3,
  ShieldCheck,
  Sparkles,
  WashingMachine,
  Wifi,
} from "lucide-react";

const asset = (path) => `${import.meta.env.BASE_URL}images/${path}`;

export const contact = {
  phoneDisplay: "+91 98101 11617",
  phone: "+919810111617",
  whatsapp: "https://wa.me/919810111617",
  email: "mvarooms@gmail.com",
};

export const stays = [
  {
    index: "01",
    title: "The Private",
    subtitle: "Your own calm in the middle of everything.",
    description:
      "A design-led private room with a dedicated study zone, generous storage, air conditioning and room to make it unmistakably yours.",
    image: asset("livingroom.jpg"),
    price: "from Rs. 15K",
    tag: "Private PG",
  },
  {
    index: "02",
    title: "The Shared",
    subtitle: "Good space. Better company.",
    description:
      "A smart twin-sharing setup for people who want community without compromising on comfort, storage or personal space.",
    image: asset("Pgdouble.jpg"),
    price: "from Rs. 12K",
    tag: "Twin Share",
  },
  {
    index: "03",
    title: "The Residence",
    subtitle: "More room for your next chapter.",
    description:
      "An independent co-living room with access to considered common spaces, everyday essentials and a genuinely connected neighbourhood.",
    image: asset("RoomIcon.jpg"),
    price: "from Rs. 30K",
    tag: "Co-living",
  },
];

export const amenities = [
  { label: "High-speed Wi-Fi", icon: Wifi },
  { label: "24/7 CCTV", icon: Cctv },
  { label: "Housekeeping", icon: Sparkles },
  { label: "Air conditioning", icon: AirVent },
  { label: "Washing machines", icon: WashingMachine },
  { label: "Fresh daily meals", icon: ChefHat },
  { label: "Study-ready rooms", icon: BookOpen },
  { label: "Secure premises", icon: ShieldCheck },
  { label: "Responsive support", icon: Clock3 },
];

export const prices = [
  {
    type: "Private",
    name: "Solo Room",
    price: "15,000",
    suffix: "/ month",
    note: "Meals included",
    featured: false,
    features: ["Private room", "Study setup", "Storage", "Shared kitchen"],
  },
  {
    type: "Most chosen",
    name: "Twin Share",
    price: "12,000",
    suffix: "/ month",
    note: "Meals included",
    featured: true,
    features: ["Twin occupancy", "Individual storage", "Study setup", "Community access"],
  },
  {
    type: "Independent",
    name: "Co-living Room",
    price: "30,000",
    suffix: "/ month",
    note: "Utilities separate",
    featured: false,
    features: ["Independent space", "Furnished room", "Common lounge", "Flexible living"],
  },
];

export const testimonials = [
  {
    quote:
      "It never felt like a stopgap. My room had everything I needed to study, recharge and actually feel at home in Delhi.",
    name: "Priya S.",
    detail: "Resident, 18 months",
  },
  {
    quote:
      "The location made college life effortless, but it was the people and how responsive the team was that made me stay.",
    name: "Anjali G.",
    detail: "North Campus student",
  },
  {
    quote:
      "Clean, secure and genuinely well managed. The shared spaces made meeting people easy without ever feeling crowded.",
    name: "Riya P.",
    detail: "Resident, 12 months",
  },
];

export const faqs = [
  {
    question: "Who are the PG rooms for?",
    answer:
      "Our managed PG accommodation is currently designed for women. Independent co-living room availability can vary, so contact us for the current options.",
  },
  {
    question: "Are meals included?",
    answer:
      "Meals are included with the PG room categories. Menus are shaped with resident input and updated regularly. Independent room inclusions may differ.",
  },
  {
    question: "Can I visit before booking?",
    answer:
      "Absolutely. Book a visit by call or WhatsApp and we will confirm a convenient time so you can see the available rooms in person.",
  },
  {
    question: "What is charged separately?",
    answer:
      "Electricity and some utilities are metered separately depending on the room category. We explain the complete cost breakdown before you book.",
  },
  {
    question: "Is there a security deposit?",
    answer:
      "Yes. The deposit amount depends on your room and agreement, and is refundable at the end of the term subject to the agreed conditions.",
  },
];
