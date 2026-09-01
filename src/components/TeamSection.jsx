import { founders } from "./content";
import { SectionHeading } from "./ui";

export function TeamSection() {
  return (
    <section className="content-section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet The Founder"
          description="Building modern digital experiences for Indian businesses with technology, strategy and innovation."
        />

        <div className="team-banner">
          <span className="eyebrow">The Team</span>
          <h3>Meet the Founders</h3>
          <p>Do log, ek studio — design se deployment tak sab in-house.</p>
        </div>

        <div className="founder-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.id}>
              <div className="scan-box">
                <span>SCANNING</span>
                <strong>FACE ANALYSIS</strong>
                <div className="scan-bar">
                  <div className="scan-fill" />
                </div>
                <small>INITIALIZING SENSOR 0%</small>
                <em>ID // {founder.id}</em>
              </div>
              <h3>{founder.name}</h3>
              <span className="portfolio-meta-line">{founder.role}</span>
              <p>{founder.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
