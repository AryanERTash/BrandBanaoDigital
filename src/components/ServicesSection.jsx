import { services } from "./content";
import { SectionHeading } from "./ui";

export function ServicesSection() {
  return (
    <section className="content-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything your business needs to win online"
          description="We combine design, content and strategy so you don't have to juggle five different agencies."
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
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
