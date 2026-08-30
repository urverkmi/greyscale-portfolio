// Each top-level page has its own signature background color. The nav tab
// for whichever page you're on always matches that page's own background,
// which is what makes it read as "blended in" / active — Nav.astro and each
// page share this single source of truth so they can never drift apart.
export const PAGE_COLOR = {
  about: "#fff",
  cv: "#999",
  contact: "#d9d9d9",
} as const;

export type PageTab = keyof typeof PAGE_COLOR;
