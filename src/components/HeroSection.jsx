import { heroOfferings, heroStats, tickerItems } from "./content";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              ⚡ {item}
            </span>
          ))}
        </div>
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Chosen by 15+ notable clients</span>
          <div className="hero-offerings" aria-label="Top services">
            {heroOfferings.map((item) => (
              <span
                className={`hero-offering-pill hero-offering-pill-${item.tone}`}
                key={item.label}
              >
                {item.label}
              </span>
            ))}
          </div>
          <h1>
            Take Your Local
            <br />
            Brand Online.
          </h1>
          <p className="hero-lead">
            We help local brands to grow their online presence with a complete digital solution. Our services include website development, social media content creation, and local SEO optimization.
			Starting at just <b>₹5,999 /-</b>
          </p>

          <div className="hero-actions">
            <a className="button button-primary button-whatsapp" href="https://wa.me/918800886698?text=Hi%20I%20want%20to%20learn%20more%20and%20avail%20the%20services!" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <a className="button button-secondary" href="#contact">
              View WhatsApp Details
            </a>
            <a className="hero-whatsapp-note" href="https://wa.me/" target="_blank" rel="noreferrer">
              Replies are usually sent within an hour
            </a>
          </div>

          <div className="stats-grid">
            {heroStats.map((item) => (
              <div className="stat-chip" key={item}>
                {item}
              </div>
            ))}
          </div>

          <div className="hero-footnote">
            <span>BrandBanaoDigital.in</span>
            <span>Live and Search Ready</span>
            <span>+50 happy clients</span>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="panel-card">
            <div className="panel-label-row">
              <span>Studio Bulletin</span>
              <span>Scroll</span>
            </div>
            <h3>One place for the digital work your business needs</h3>
            <p>
              We bring design, content and growth planning together so your
              launch stays simple and coordinated.
            </p>

            <div className="panel-metrics">
              <div>
                <strong>90+</strong>
                <span>Lighthouse scores</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>Premium websites</span>
              </div>
              <div>
                <strong>5–10</strong>
                <span>Days to launch</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
