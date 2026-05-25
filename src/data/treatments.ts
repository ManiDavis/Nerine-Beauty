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
}

export const treatments: Treatment[] = [
  {
    id: "visible-age-reverse",
    name: "Visible Age Reverse Facial",
    category: "facials",
    tagline: "Turn back the clock",
    description:
      "A single premium anti-ageing treatment designed to visibly reverse the signs of time. Using advanced techniques and carefully selected products, this express treatment delivers immediate, visible results with no downtime.",
    options: [
      { name: "Visible Age Reverse Facial", duration: "30 min", price: "£105" },
    ],
  },
  {
    id: "guinot-electrical",
    name: "Guinot Electrical Facials",
    category: "facials",
    tagline: "Advanced technology, radiant results",
    description:
      "Guinot's renowned electrical facial treatments use cutting-edge technology to deliver transformative results. Each treatment is expertly adapted to your skin's individual needs — for deep cleansing, intensive hydration or targeted lifting.",
    options: [
      { name: "Hydradermie Jeunesse 1000", duration: "60 min", price: "£85" },
      { name: "Hydradermie 1000", duration: "60 min", price: "£80" },
      { name: "Hydradermie Lift 1000", duration: "60 min", price: "£80" },
      { name: "Hydraclean", duration: "30 min", price: "£35" },
    ],
  },
  {
    id: "guinot-manual",
    name: "Guinot Manual Facials",
    category: "facials",
    tagline: "The art of touch",
    description:
      "Performed entirely by hand, Guinot's manual facial treatments harness the power of expert touch combined with premium formulations. Each treatment is tailored to your specific skin concerns, leaving skin balanced, radiant and deeply nourished.",
    options: [
      { name: "Age Summum", duration: "50 min", price: "£80" },
      { name: "Lift Summum", duration: "50 min", price: "£75" },
      { name: "Hydra Summum", duration: "50 min", price: "£72" },
      { name: "Detoxygene", duration: "50 min", price: "£57" },
    ],
  },
  {
    id: "a-lift",
    name: "A-Lift",
    category: "facials",
    tagline: "Non-surgical lifting",
    description:
      "The non-surgical alternative to a facelift. A-Lift uses patented three-phase microcurrent technology to lift, firm and tone facial muscles, stimulate cell renewal and boost collagen and elastin production. Available as a standalone treatment or enhanced with a nourishing mask and relaxing facial massage.",
    options: [
      { name: "A Lift", duration: "60 min", price: "£63" },
      { name: "A Lift with Mask", duration: "75 min", price: "£73" },
      { name: "A Lift with Massage and Mask", duration: "90 min", price: "£90" },
    ],
  },
  {
    id: "massages",
    name: "Massages",
    category: "body",
    tagline: "Escape the everyday",
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
