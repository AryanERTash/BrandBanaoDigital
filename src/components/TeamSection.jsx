import { founders } from "./content";
import { SectionHeading } from "./ui";

export function TeamSection() {
	return (
		<section className="content-section" id="about">
			<div className="container">
				<SectionHeading
					eyebrow="Leadership"
					title="Meet the People Behind the Studio"
					description="We create modern digital experiences for Indian businesses by combining strategy, design and technology."
				/>

				<div className="team-banner">
					<span className="eyebrow">The Team</span>
					<h3>Meet the Founders</h3>
					<p>Do log, ek studio — planning, design aur deployment sab in-house.</p>
				</div>

				<div className="founder-grid">
					{founders.map((founder) => (
						<article className="founder-card" key={founder.id}>
							<div className="scan-box">
								<img src={founder.image} alt={founder.name} />
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
