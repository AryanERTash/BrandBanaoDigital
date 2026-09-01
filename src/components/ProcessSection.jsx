import { processSteps } from "./content";
import { SectionHeading } from "./ui";

export function ProcessSection() {
  return (
    <section className="content-section">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="From idea to live in 4 simple steps"
          description="A smooth, transparent process where you always know what's happening and when."
          align="center"
        />

        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.step}>
              <span className="process-icon" aria-hidden="true">
                {step.icon}
              </span>
              <span className="process-step">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
