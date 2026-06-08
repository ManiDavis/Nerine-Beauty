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
  extendedSections?: { heading: string; content: string }[];
  benefits?: string[];
  options: TreatmentOption[];
  bookingNote?: string;
  img?: string;
  imgPosition?: string;
}

export const treatments: Treatment[] = [
  {
    id: "visible-age-reverse",
    name: "Visible Age Reverse Facial",
    category: "facials",
    tagline: "Turn back the clock",
    img: "/images/age-summum.jpg",
    imgPosition: 'center 40%',
    description:
      "Our signature age-reversing treatment targets fine lines, loss of firmness and uneven skin tone using advanced techniques and premium products — for visibly younger-looking skin after a single session.",
    options: [
      { name: "Visible Age Reverse Facial", duration: "30 min", price: "£105" },
    ],
  },
  {
    id: "guinot-electrical",
    name: "Guinot Electrical Facials",
    category: "facials",
    tagline: "Technology meets skincare",
    img: "/images/hydraclean.png",
    imgPosition: 'center 25%',
    description:
      "Smooth, clear, radiant and youthful. Revolutionary electrical salon treatments using Guinot's advanced technology, formulated with the best in skincare innovation to deliver outstanding results.",
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
    img: "/images/detoxygene.jpg",
    imgPosition: 'center 25%',
    description:
      "Expertly performed by hand, these Guinot treatments combine precise massage techniques with targeted skincare to firm, lift and nourish — leaving skin visibly younger and deeply radiant.",
    options: [
      { name: "Age Summum", duration: "50 min", price: "£80" },
      { name: "Lift Summum", duration: "60 min", price: "£75" },
      { name: "Hydra Summum", duration: "60 min", price: "£72" },
      { name: "Detoxygene", duration: "60 min", price: "£57" },
    ],
  },
  {
    id: "a-lift",
    name: "A Lift",
    category: "facials",
    tagline: "Non-surgical lift",
    img: "/images/A - Lift Facial.jpg",
    imgPosition: 'center 20%',
    description:
      "Designed to fit into any lifestyle, age group, and suit the busiest of schedules. Whether trying it out, booking a course, or creating a bespoke programme — A-Lift delivers luxury, relaxation, AND results!",
    extendedSections: [
      {
        heading: "Lasting Effects",
        content:
          "Results are immediate after just one A-Lift treatment however, for longer lasting results a course would be advised to maintain the beneficial effects of the treatment. The number of recommended treatments varies from 5 to 10 and from person to person. A maintenance treatment is recommended approximately every 4 to 6 weeks to maintain your fresh and natural results.",
      },
    ],
    benefits: [
      "Intensive lifting, toning, and firming of the face and neck",
      "Improved skin hydration",
      "Regain elasticity and structure",
      "Smoother, more radiant complexion",
      "Target and reduce appearance of fine lines and wrinkles",
      "Reduce puffiness around the eye area due to lymph (fluid) accumulation",
      "Non-invasive and completely pain free",
      "No downtime",
    ],
    options: [
      { name: "A-Lift", duration: "45 min", price: "£55" },
      { name: "A-Lift — Course of 5", duration: "1 a week for 5 weeks", price: "£250" },
      { name: "A-Lift — Course of 10", duration: "9x A-Lift + 1x Luxury A-Lift", price: "£570" },
      { name: "Luxury A-Lift", duration: "80 min", price: "£85" },
      { name: "Luxury A-Lift — Course of 5", duration: "1 a week for 5 weeks", price: "£380" },
    ],
    bookingNote: "Have just the A-Lift on its own, or indulge in a massage and mask — book a consultation to discuss the treatment.",
  },
  {
    id: "massages",
    name: "Massages",
    category: "body",
    tagline: "Escape the everyday",
    img: "/images/Massage.jpeg",
    description:
      "Massage is an ancient therapy that still works wonders today, and can transport you into relaxation to help soothe mind and muscles. Using a combination of Swedish massage movements, Balinese, and over 30 years of experience — a gentle flowing massage designed to melt away tension, improve circulation and leave you feeling relaxed from head to toe.\n\nPerfect for stress relief and overall wellness. Try the sensory journey with the Escape massage, or Lava Shells deep warmth to soothe the muscles, or just a back massage to help release everyday tension.",
    options: [
      { name: "Divine Escape Signature Massage", duration: "85 min", price: "£85" },
      { name: "Escape Massage", duration: "60 min", price: "£70" },
      { name: "Therma Bliss Add-on", duration: "Add to any massage", price: "£10" },
      { name: "Aroma Massage", duration: "60 min", price: "£55" },
      { name: "Aroma Massage", duration: "45 min", price: "£45" },
      { name: "Aroma Massage", duration: "30 min", price: "£35" },
      { name: "Lava Shells Massage", duration: "75 min", price: "£80" },
      { name: "Lava Shells Massage", duration: "45 min", price: "£55" },
      { name: "Ear Candling", duration: "45 min", price: "£40" },
      { name: "Body Brush, Exfoliation & Moisturise", duration: "30 min", price: "£35" },
      { name: "Back, Face & Scalp Treatment", duration: "75 min", price: "£75" },
      { name: "Total Body Care", duration: "90 min", price: "£75" },
      { name: "Total Body Care Deluxe", duration: "120 min", price: "£100" },
    ],
  },
  {
    id: "waxing",
    name: "Waxing & Electrolysis",
    category: "hair-removal",
    tagline: "Smooth for longer",
    img: "/images/Electrolysis.jpeg",
    description:
      "Smooth, long-lasting results using the finest wax formulations for minimal discomfort. Electrolysis offers a permanent solution for unwanted hair.",
    bookingNote: "Combinations of different wax options are available — visit the booking site to explore and build your session.",
    options: [
      { name: "Full Leg Wax", duration: "45 min", price: "£38" },
      { name: "Half Leg Wax", duration: "30 min", price: "From £25" },
      { name: "Bikini Wax", duration: "20 min", price: "£14" },
      { name: "Electrolysis (15 min)", duration: "15 min", price: "£17" },
      { name: "Electrolysis (30 min)", duration: "30 min", price: "£28" },
    ],
  },
  {
    id: "eyes",
    name: "Enhance Your Eyes",
    category: "eyes",
    tagline: "Define your look",
    img: "/images/Eyelash-Lift.jpg",
    description:
      "From expertly shaped brows to stunning lash lifts using Nouveau Lashes and LVL technology — our eye treatments frame your face beautifully for weeks.",
    bookingNote: "Combinations of tinting and lash options are available — visit the booking site to explore and build your session.",
    options: [
      { name: "LVL Lash Lift", duration: "60 min", price: "£55" },
      { name: "Classic Lashes", duration: "90 min", price: "£85" },
      { name: "Eyelash Tint", duration: "20 min", price: "£20" },
      { name: "Brow Tint & Shape", duration: "30 min", price: "£19" },
    ],
  },
  {
    id: "bio-sculpture",
    name: "Bio Sculpture Nails",
    category: "nails",
    tagline: "Gel or varnish",
    img: "/images/Bio Sculpt Gel Nails.jpeg",
    description:
      "Bio Sculpture gel strengthens, protects and beautifies your natural nails. Available in an extensive colour range with long-lasting, chip-free results.",
    bookingNote: "Luxury and Express options are available in both Gel and Varnish — visit the booking site to explore.",
    options: [
      { name: "Gel Manicure", duration: "60 min", price: "£45" },
      { name: "Gel Pedicure", duration: "60 min", price: "£45" },
      { name: "Bio Varnish — Hands", duration: "45 min", price: "£35" },
      { name: "Bio Varnish — Feet", duration: "45 min", price: "£35" },
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
