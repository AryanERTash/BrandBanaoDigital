import { technologies } from "./content";
import { SectionHeading } from "./ui";

export function TechnologySection() {
  return (
    <section className="content-section">
      <div className="container">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Technologies We Use"
          description="Modern technologies for scalable, secure and high-performance applications."
        />

        <div className="tech-grid">
          {Object.entries(technologies).map(([group, items]) => (
            <article className="tech-card" key={group}>
              <h3>{group}</h3>
              <div className="tag-row">
                {items.map((item) => (
                  <span className="tag-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
