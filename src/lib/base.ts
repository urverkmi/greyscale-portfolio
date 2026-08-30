// Prefixes a root-relative path ("/images/x.png") with the site's base path.
// Needed because this site deploys to a GitHub Pages *project* page
// (urverkmi.github.io/greyscale-portfolio/), not the domain root — every
// hardcoded "/..." src/href has to go through this or it 404s in production
// while still looking correct in local dev (where BASE_URL is "/").
export function withBase(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}
