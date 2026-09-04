import { portfolioProjects } from "./content";
import { SectionHeading, PlaceholderImage } from "./ui";

export function PortfolioSection() {
  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Every site here is live right now"
          description="Premium websites built for politicians, companies, hotels, cafes and local shops with performance and search visibility in mind."
        />

        <div className="portfolio-meta">
          <span>Built on modern web principles</span>
          <span>90+ Lighthouse scores</span>
          <span>Search Console configured</span>
          <a href="#contact">All work</a>
        </div>

        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <article className="portfolio-card" key={project.site}>
              <PlaceholderImage label={`${project.title} preview`} src={project.src} />

              <div className="portfolio-card-body">
                <div className="portfolio-card-top">
                  <div>
                    <span className="site-label">{project.site}</span>
                    <h3>{project.title}</h3>
                    <p className="portfolio-meta-line">{project.meta}</p>
                  </div>
                  <span className="status-pill">Live</span>
                </div>

                <div className="portfolio-highlights">
                  <span className="category-pill">{project.category}</span>
                  <span className="location-pill">{project.location}</span>
                </div>
                <p>{project.summary}</p>

                <div className="feature-highlight-row">
                  {project.highlights.map((item) => (
                    <span
                      className={`feature-highlight feature-highlight-${item.tone}`}
                      key={item.label}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a className="inline-link" href={'https://'+project.site} target="_blank" rel="noopener noreferrer">
                  Visit site
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
