export type Project = {
  slug: string;
  title: string; // "Frictionless"
  tagline: string; // "i.e. Plasma brake test rig"
  category: string; // "product design [space tech]"
  logo: string; // path to SVG
};

export const projects: Project[] = [
  {
    slug: "frictionless",
    title: "Frictionless",
    tagline: "Plasma brake deployment test rig",
    category: "product design",
    logo: "/logos/frictionless-logo.svg",
  },
  {
    slug: "kone",
    title: "KONE Concierge",
    tagline: "AI concierge in hotel elevators",
    category: "experience design",
    logo: "/logos/kone-logo.svg",
  },
  {
    slug: "hesper",
    title: "Hesper the Artsy Ghost",
    tagline: "Mixed reality in art museums",
    category: "interaction design",
    logo: "/logos/hesper-logo.svg",
  },
  {
    slug: "catcha",
    title: "Catcha",
    tagline: "Toy dispenser operated by cats",
    category: "product design",
    logo: "logos/catcha-logo.svg",
  },
];
