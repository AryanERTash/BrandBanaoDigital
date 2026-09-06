import { portfolioProjects } from "./content";
import { SectionHeading, PlaceholderImage } from "./ui";

export function PortfolioSection() {
  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Live projects built for real clients"
          description="Websites for leaders, companies, restaurants and local businesses, created with performance and search visibility as core priorities."
        />

        <div className="portfolio-meta">
          <span>Built with modern web practices</span>
          <span>90+ Lighthouse scores</span>
          <span>Search Console setup included</span>
          <a href="#contact">Discuss your project</a>
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
                  Open website
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
