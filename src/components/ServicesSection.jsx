import { services } from "./content";
import { SectionHeading } from "./ui";

export function ServicesSection() {
  return (
    <section className="content-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Digital services that help your business grow online"
          description="Design, content and growth strategy are handled together, giving you one clear team from planning to launch."
        />

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="card-kicker">{service.title}</span>
              <p>{service.description}</p>
              <ul className="check-list">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a href="#contact" className="inline-link">
                Explore service
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
