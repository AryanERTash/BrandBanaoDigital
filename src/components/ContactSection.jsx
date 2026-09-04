import { SectionHeading } from "./ui";

export function ContactSection() {
  return (
    <section className="content-section" id="contact">
      <div className="container contact-panel">
        <div>
          <SectionHeading
            eyebrow="Start your project on WhatsApp"
            title="Skip the form. Message us directly."
            description="Delivery in 5–10 days. Send your business name, goal and timeline on WhatsApp and we will map the fastest route from idea to launch."
          />
        </div>

        <div className="whatsapp-panel">
          <div className="whatsapp-panel-card">
            <span className="whatsapp-kicker">Preferred Contact</span>
            <h3>WhatsApp Direct</h3>
            <p>
              Best for quick replies, project briefs, example references and launch
              discussions without waiting on email threads.
            </p>
            <ul className="whatsapp-list">
              <li>Website design and development enquiries</li>
              <li>SEO, Google Business and ranking support</li>
              <li>Reels, branding and local campaign launches</li>
            </ul>
            <a className="button button-whatsapp button-whatsapp-large" href="https://wa.me/918800886698?text=Hi%20I%20want%20to%20learn%20more%20and%20avail%20the%20services!" target="_blank" rel="noreferrer">
              Open WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
