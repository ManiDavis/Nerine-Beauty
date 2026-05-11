export interface TreatmentOption {
  name: string;
  duration: string;
  price: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  options: TreatmentOption[];
  img?: string;
}

export const treatments: Treatment[] = [
  {
    id: "visible-age-reverse",
    name: "Visible Age Reverse Facial",
    category: "facials",
    tagline: "Turn back the clock",
    img: "/images/treatment-facial.jpg",
    description:
      "Our signature age-reversing treatment targets fine lines, loss of firmness and uneven skin tone using advanced techniques and premium products — for visibly younger-looking skin after a single session.",
    options: [
      { name: "Express", duration: "45 min", price: "£55" },
      { name: "Full Treatment", duration: "75 min", price: "£85" },
      { name: "Deluxe", duration: "90 min", price: "£105" },
    ],
  },
  {
    id: "guinot-hydradermie",
    name: "Guinot Hydradermie Facials",
    category: "facials",
    tagline: "Your best skin yet",
    img: "/images/treatment-hydradermie.jpg",
    description:
      "Smooth, clear, radiant and youthful. Revolutionary salon treatments and after-care products formulated with the best in skincare innovation to enhance and maintain results at home.",
    options: [
      { name: "Hydradermie Classic", duration: "60 min", price: "£70" },
      { name: "Hydradermie Lift", duration: "75 min", price: "£90" },
      { name: "Eye Logic", duration: "45 min", price: "£55" },
    ],
  },
  {
    id: "guinot-manual",
    name: "Guinot Manual Face Treatments",
    category: "facials",
    tagline: "The art of touch",
    img: "/images/salon-interior.jpg",
    description:
      "Expertly performed by hand, these treatments combine Guinot's precise massage techniques with targeted skincare to leave skin balanced, refreshed and deeply nourished.",
    options: [
      { name: "Aromatic Ritual", duration: "60 min", price: "£65" },
      { name: "Moisture Logic", duration: "60 min", price: "£65" },
      { name: "Skin Glow", duration: "75 min", price: "£80" },
    ],
  },
  {
    id: "a-lift",
    name: "A-Lift Treatments",
    category: "facials",
    tagline: "Non-surgical lift",
    img: "/images/treatment-alift.jpg",
    description:
      "The non-surgical alternative to a facelift. A-Lift uses patented three-phase current technology to lift, firm and tone facial muscles, stimulate cell renewal and boost collagen production.",
    options: [
      { name: "A-Lift Face", duration: "75 min", price: "£95" },
      { name: "Neck & Décolleté", duration: "60 min", price: "£80" },
      { name: "Full Face & Neck", duration: "90 min", price: "£120" },
    ],
  },
  {
    id: "massages",
    name: "Massages",
    category: "body",
    tagline: "Escape the everyday",
    img: "/images/pexels-biomedica-tatiane-antunes-477350868-15876689.jpg",
    description:
      "From tension-melting deep tissue work to blissful aromatherapy rituals, every massage is tailored specifically to your needs, leaving you completely restored.",
    options: [
      { name: "Swedish Relaxation", duration: "60 min", price: "£65" },
      { name: "Deep Tissue", duration: "60 min", price: "£70" },
      { name: "Hot Stone", duration: "75 min", price: "£85" },
      { name: "Aromatherapy", duration: "60 min", price: "£70" },
    ],
  },
  {
    id: "waxing",
    name: "Waxing & Electrolysis",
    category: "hair-removal",
    tagline: "Smooth for longer",
    img: "/images/salon-interior.jpg",
    description:
      "Smooth, long-lasting results using the finest wax formulations for minimal discomfort. Electrolysis offers a permanent solution for unwanted hair.",
    options: [
      { name: "Full Leg Wax", duration: "45 min", price: "£40" },
      { name: "Half Leg Wax", duration: "30 min", price: "£25" },
      { name: "Bikini Wax", duration: "20 min", price: "£20" },
      { name: "Electrolysis (15 min)", duration: "15 min", price: "£22" },
      { name: "Electrolysis (30 min)", duration: "30 min", price: "£38" },
    ],
  },
  {
    id: "eyes",
    name: "Enhance Your Eyes",
    category: "eyes",
    tagline: "Define your look",
    img: "/images/salon-interior.jpg",
    description:
      "From expertly shaped brows to stunning lash lifts using Nouveau Lashes and LVL technology — our eye treatments frame your face beautifully for weeks.",
    options: [
      { name: "LVL Lash Lift", duration: "60 min", price: "£55" },
      { name: "Nouveau Classic Lashes", duration: "90 min", price: "£75" },
      { name: "Lash Tint", duration: "20 min", price: "£18" },
      { name: "Brow Tint & Shape", duration: "30 min", price: "£22" },
    ],
  },
  {
    id: "bio-sculpture",
    name: "Bio Sculpture Nails",
    category: "nails",
    tagline: "Gel or varnish",
    img: "/images/wmremove-transformed (1).jpg",
    description:
      "Bio Sculpture gel strengthens, protects and beautifies your natural nails. Available in an extensive colour range with long-lasting, chip-free results.",
    options: [
      { name: "Gel Overlay — Hands", duration: "60 min", price: "£45" },
      { name: "Gel Overlay — Feet", duration: "60 min", price: "£45" },
      { name: "Bio Varnish — Hands", duration: "45 min", price: "£35" },
      { name: "Bio Varnish — Feet", duration: "45 min", price: "£35" },
      { name: "Gel Infill", duration: "45 min", price: "£35" },
    ],
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "facials", label: "Facials" },
  { id: "body", label: "Body" },
  { id: "hair-removal", label: "Hair Removal" },
  { id: "eyes", label: "Eyes & Brows" },
  { id: "nails", label: "Nails" },
];
