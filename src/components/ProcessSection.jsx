import { processSteps } from "./content";
import { SectionHeading } from "./ui";

export function ProcessSection() {
  return (
    <section className="content-section">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="Your idea goes live in four clear steps"
          description="The process stays simple and visible, so you know what is being built and when each stage is moving."
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
