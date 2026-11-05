// ✏️ EDIT EVERYTHING HERE. All text on the site comes from this file.
// ⚠️ Items marked PLACEHOLDER must be replaced with real info before launch.

export const site = {
  name: "Madam CAC",
  founderName: "Emilia Jerome Gbonhinbor",
  whatsapp: "2348138507198",
  phone: "+234 813 850 7198",
  email: "speedsterapexsolutionsltd@gmail.com",
  address: "Lagos, Nigeria",
  accreditation: "CAC Accredited Agent · Certified Business Consultant",
  businessesRegistered: 300,
  companyName: "Speedster Apex Solutions Ltd",
  yearStarted: 2019,
  rcNumber: "8386316",
  cacSearchUrl: "https://search.cac.gov.ng/home",
  instagram: "https://instagram.com/",
};

export const whatsappLink = (msg = "Hello Madam CAC, I'd like to register my business.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export interface ServiceCategory {
  code: string;
  name: string;
  desc: string;
  icon: string;
  items: string[];
  featured?: boolean;
}

export const serviceCategories: ServiceCategory[] = [
  {
    code: "A",
    name: "Business Registration & Corporate Affairs",
    desc: "End-to-end CAC incorporation, annual compliance filings, and prompt resolution of stalled portal queries.",
    icon: "Building2",
    items: [
      "CAC Business Name / Enterprise Registration",
      "Limited Liability Company (LTD) Registration",
      "Incorporated Trustees Registration",
      "CAC Annual Returns Filing",
      "Post-Incorporation Filings & Updates",
      "Assistance with CAC Queries & Documentation",
    ],
    featured: true,
  },
  {
    code: "B",
    name: "Intellectual Property Registration",
    desc: "Secure legal brand ownership, copyright protection, and exclusive commercial rights across Nigeria.",
    icon: "ShieldCheck",
    items: [
      "Trademark Registration",
      "Copyright Registration",
    ],
    featured: true,
  },
  {
    code: "C",
    name: "Regulatory & Tax-Related Support",
    desc: "Mandatory anti-money laundering certifications, international export licencing, and active tax onboarding.",
    icon: "Landmark",
    items: [
      "SCUML Registration Assistance",
      "Export Licence Assistance",
      "Tax-ID Retrieval, Activation & Validation",
      "NRS/Rev360 Enrollment & Tax Compliance",
    ],
  },
  {
    code: "D",
    name: "Branding & Business Documentation",
    desc: "Professional brand identity design, tender-ready company profiles, and standardized corporate templates.",
    icon: "Sparkles",
    items: [
      "Logo Design",
      "Letterhead & Business Card Design",
      "Company Profile Design",
      "Business Document & Template Design",
      "Google Business Profile Setup Assistance",
    ],
  },
  {
    code: "E",
    name: "Training, Consulting & Business Support",
    desc: "Practical hands-on masterclasses and one-on-one consulting to master CAC processes and ensure compliance.",
    icon: "HeartHandshake",
    items: [
      "CAC Registration Training",
      "Trademark Registration Training",
      "Business Compliance Guidance",
      "Strategic Business Consulting",
    ],
  },
];

export const steps = [
  { title: "Chat with us", desc: "Tell us your business type and proposed names on WhatsApp." },
  { title: "Name search", desc: "We check availability and reserve your preferred name." },
  { title: "We file it", desc: "We prepare and submit every document to CAC for you." },
  { title: "Get certified", desc: "Receive your certificate and documents, ready to use." },
];

export const reasons = [
  { title: "Accredited & legit", desc: "Every filing is done directly on the official CAC portal." },
  { title: "Fast turnaround", desc: "Most business names are done within days, not weeks." },
  { title: "Transparent pricing", desc: "No hidden charges. You know the cost upfront." },
  { title: "Real human support", desc: "Talk to Madam CAC directly, before and after registration." },
];

// PLACEHOLDER brand names: replace with real clients (with permission)
export const brands = [
  "Adaeze Foods", "Kora Logistics", "Bloom Hair Co.", "TechNest NG", "Oluwa Prints",
  "Zaria Fabrics", "Lekki Bakes", "PrimeBuild Ltd", "Amara Skincare", "Naija Tutors",
];

// PLACEHOLDER testimonials: replace with real reviews
export const testimonials = [
  {
    name: "Chiamaka O.",
    role: "Founder, Bloom Hair Co.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    text: "I was scared of the whole CAC process. Madam CAC handled everything and kept me updated on WhatsApp. Got my certificate so fast!",
  },
  {
    name: "Tunde A.",
    role: "CEO, Kora Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    text: "Registered my LTD without stress. Very professional and honest about timelines and costs.",
  },
  {
    name: "Fatima B.",
    role: "Director, Zaria Fabrics",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&auto=format&fit=crop&q=80",
    text: "Best decision I made. She also helped me with my TIN and bank account documents.",
  },
  {
    name: "Emeka N.",
    role: "Owner, TechNest NG",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=120&auto=format&fit=crop&q=80",
    text: "Quick, transparent and reliable. I've referred three friends already.",
  },
  {
    name: "Pastor Daniel I.",
    role: "Grace Assembly",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
    text: "Our Incorporated Trustees registration was smooth from start to finish. Highly recommended.",
  },
  {
    name: "Blessing E.",
    role: "Amara Skincare",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&auto=format&fit=crop&q=80",
    text: "She answered every question patiently. My business is now officially registered!",
  },
  {
    name: "Seun K.",
    role: "PrimeBuild Ltd",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
    text: "Filed our annual returns and change of directors. Saved us from penalties.",
  },
  {
    name: "Ngozi U.",
    role: "Lekki Bakes",
    avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=120&auto=format&fit=crop&q=80",
    text: "Affordable and fast. Madam CAC is the real deal.",
  },
];

export const faqs = [
  { q: "How long does CAC registration take?", a: "Business names typically take 2–5 working days and limited companies 5–10 working days, depending on CAC processing." },
  { q: "What documents do I need?", a: "A valid ID (NIN, passport or driver's licence), passport photo, signature, address and your proposed business names. We'll guide you." },
  { q: "Is this legit? Will I get an original certificate?", a: "Yes. All registrations are done on the official CAC portal and your certificate can be verified on the CAC public search." },
  { q: "Can you register my business if I'm outside Lagos or abroad?", a: "Absolutely. The whole process is done online, so we serve clients across Nigeria and in the diaspora." },
  { q: "How do I pay?", a: "We'll share official payment details on WhatsApp after confirming your requirements." },
];
