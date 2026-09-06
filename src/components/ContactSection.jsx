import { SectionHeading } from "./ui";

export function ContactSection() {
  return (
    <section className="content-section" id="contact">
      <div className="container contact-panel">
        <div>
          <SectionHeading
            eyebrow="Start on WhatsApp now!"
            title="Message us directly with no waiting."
            description="Share your business name, goal and preferred timeline on WhatsApp. We will suggest the quickest path from idea to launch, usually within 5–10 days."
          />
        </div>

        <div className="whatsapp-panel">
          <div className="whatsapp-panel-card">
            <span className="whatsapp-kicker">Direct Contact</span>
            <h3>WhatsApp Direct</h3>
            <p>
              Ideal for quick replies, project briefs, reference links and launch
              planning.
            </p>
            <ul className="whatsapp-list">
              <li>Website design and development</li>
              <li>SEO, Marketing and search visibility services</li>
              <li>Reels, Youtube, branding and campaign planning</li>
            </ul>
            <a className="button button-whatsapp button-whatsapp-large" href="https://wa.me/918800886698?text=Hi%20I%20want%20to%20learn%20more%20and%20avail%20the%20services!" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
