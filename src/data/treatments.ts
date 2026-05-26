export interface TreatmentOption {
  name: string;
  duration: string;
  price: string;
  description?: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  options: TreatmentOption[];
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
      "The non-surgical alternative to a facelift. A-Lift lifts, firms and tones the face and neck, reduces fine lines and restores elasticity — completely pain free, with no downtime.",
    options: [
      { name: "A-Lift", duration: "45 min", price: "£55" },
      { name: "A-Lift — Course of 5", duration: "1 a week for 5 weeks", price: "£250" },
      {
        name: "A-Lift — Course of 10",
        duration: "9x A-Lift + 1x Luxury A-Lift",
        price: "£570",
        description: "Nine standard A-Lift sessions plus one complimentary Luxury A-Lift — our best-value course for lasting, cumulative results.",
      },
      { name: "Luxury A-Lift", duration: "80 min", price: "£85" },
      { name: "Luxury A-Lift — Course of 5", duration: "1 a week for 5 weeks", price: "£380" },
    ],
  },
  {
    id: "massages",
    name: "Massages",
    category: "body",
    tagline: "Escape the everyday",
    img: "/images/Massage.jpeg",
    description:
      "Deeply restorative treatments using 100% natural, vegan-friendly Sensory Retreats oils — Coconut, Argan and Shea. From an Aroma Massage to the full Divine Escape Signature experience, plus Lava Shells and add-on upgrades.",
    options: [
      {
        name: "Divine Escape Signature Massage",
        duration: "85 min",
        price: "£85",
        description: "Our most indulgent experience — a full-body massage blending aromatherapy, deep relaxation techniques and heated Lava Shells for complete restoration.",
      },
      {
        name: "Escape Massage",
        duration: "60 min",
        price: "£70",
        description: "A deeply restorative full-body massage using Sensory Retreats oils, fully tailored to your tension and mood.",
      },
      {
        name: "Aroma Massage",
        duration: "60 min",
        price: "£55",
        description: "A lighter, soothing full-body massage using 100% natural Coconut, Argan and Shea oils. Perfect for regular relaxation.",
      },
      {
        name: "Lava Shells Massage",
        duration: "75 min",
        price: "£80",
        description: "Heated volcanic shells glide across the body delivering deeply warming pressure — ideal for muscle tension and stress relief.",
      },
      {
        name: "Total Body Care Deluxe",
        duration: "120 min",
        price: "£100",
        description: "The ultimate body package: body brush, full exfoliation, moisturise treatment, and a relaxing massage — all in one session.",
      },
      {
        name: "Therma Bliss Add-on",
        duration: "Add to any massage",
        price: "£10",
        description: "Warm thermal mitts or booties applied during your massage for extra warmth and comfort on hands or feet.",
      },
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
    options: [
      { name: "Full Leg Wax", duration: "45 min", price: "£38" },
      { name: "Half Leg Wax", duration: "30 min", price: "From £25" },
      { name: "Bikini Wax", duration: "20 min", price: "£14" },
      { name: "Electrolysis (15 min)", duration: "15 min", price: "£17" },
      { name: "Electrolysis (30 min)", duration: "30 min", price: "£28" },
      { name: "Electrolysis (45 min)", duration: "45 min", price: "£40" },
    ],
  },
  {
    id: "eyes",
    name: "Enhance Your Eyes",
    category: "eyes",
    tagline: "Define your look",
    img: "/images/Eyelash-Lift.jpg",
    description:
      "From expertly shaped brows to stunning lash lifts — our eye treatments use Nouveau Lashes and LVL technology to frame your face beautifully for weeks.",
    options: [
      {
        name: "LVL Lash Lift & Tint",
        duration: "60 min",
        price: "£55",
        description: "Lifts and curls your natural lashes from the root, then tints for added definition. No extensions, no maintenance — results last up to 8 weeks.",
      },
      {
        name: "Eyelash Extensions — Full Set",
        duration: "90 min",
        price: "£85",
        description: "Individual synthetic lashes applied to each natural lash for a full, customisable look that lasts 4–6 weeks.",
      },
      {
        name: "Eyelash Extensions — Infills",
        duration: "From 45 min",
        price: "From £38",
        description: "Top up your existing set as your natural lashes grow out. Recommended every 2–3 weeks to keep your look full.",
      },
      { name: "Eyelash Tint, Brow Tint & Shape", duration: "30 min", price: "£34" },
      { name: "Brow Tint & Shape", duration: "15 min", price: "£19" },
      {
        name: "Eye Logic Eye Contour Treatment",
        duration: "45 min",
        price: "£48",
        description: "A specialist Guinot treatment targeting dehydration, puffiness and fine lines around the delicate eye contour area.",
      },
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
    options: [
      { name: "Deluxe Manicure", duration: "60 min", price: "£45" },
      { name: "Deluxe Pedicure", duration: "75 min", price: "£55" },
      { name: "Gel Manicure", duration: "60 min", price: "£43" },
      { name: "Gel Pedicure", duration: "60 min", price: "£43" },
      { name: "Manicure", duration: "45 min", price: "£36" },
      { name: "Pedicure", duration: "45 min", price: "£40" },
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
