export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function PlaceholderImage({ label, src }) {
  return (
    <div className="placeholder-frame" aria-label={label} role="img">
      {src ? <img className="placeholder-image" src={src} alt={label} /> : null}
      <div className="placeholder-grid" aria-hidden="true">
        <span className="grid-line grid-line-horizontal" />
        <span className="grid-line grid-line-vertical" />
        <span className="focus-ring" />
      </div>
      <div className="placeholder-overlay">
        <span className="placeholder-kicker">Placeholder Visual</span>
        <strong>{label}</strong>
      </div>
    </div>
  );
}
