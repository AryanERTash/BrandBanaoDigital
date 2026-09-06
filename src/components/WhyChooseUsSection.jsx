import { differentiators, impactStats } from "./content";
import { SectionHeading } from "./ui";

export function WhyChooseUsSection() {
  return (
    <section className="content-section">
      <div className="container split-layout">
        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Made for local businesses across India"
            description="Our work goes beyond putting pages online. We help your business look credible, show up in search and become easier to choose."
          />
        </div>

        <div className="difference-grid">
          {differentiators.map((item) => (
            <article className="difference-card" key={item.title}>
              <span className="card-kicker">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="container impact-grid">
        {impactStats.map((stat) => (
          <div className="impact-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
