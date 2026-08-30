export type Project = {
  slug: string;
  title: string; // "Frictionless"
  tagline: string; // "i.e. Plasma brake test rig"
  category: string; // "product design [space tech]"
  logo: string; // path to SVG
  image: string; // path to hero image
};

export const projects: Project[] = [
  {
    slug: "frictionless",
    title: "Frictionless",
    tagline: "i.e. Plasma brake test rig",
    category: "product design",
    logo: "/logos/frictionless-logo.svg",
    image: "/images/frictionless-hero.jpg",
  },
  {
    slug: "kone",
    title: "KONE Concierge",
    tagline: "i.e. AI concierge in hotel elevators",
    category: "experience design",
    logo: "/logos/kone-logo.svg",
    image: "/images/kone-hero.jpg",
  },
  {
    slug: "hesper",
    title: "Hesper the Artsy Ghost",
    tagline: "i.e. Mixed reality in art museums",
    category: "interaction design",
    logo: "/logos/hesper-logo.svg",
    image: "/images/hesper-hero.jpg",
  },
];
