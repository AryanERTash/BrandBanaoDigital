import { navigationItems } from "./content";

const navIdMap = {
  Services: "services",
  Portfolio: "portfolio",
  About: "about",
  Contact: "contact",
};

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <a className="brand-mark" href="#top">
          <span className="brand-dot" />
          <div>
            <strong>BrandBanaoDigital.in</strong>
            <small>Web, Reels and SEO Studio</small>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {navigationItems.map((item) => (
            <a key={item} href={`#${navIdMap[item]}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href="#contact">
          Start Project <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="container mobile-nav-wrap">
        <nav className="mobile-nav" aria-label="Mobile primary">
          {navigationItems.map((item) => (
            <a key={item} href={`#${navIdMap[item]}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="button button-primary mobile-cta" href="#contact">
          Start Project <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
