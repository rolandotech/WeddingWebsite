export default function SectionHeader({ title, subtitle }) {
  return (
    <header className="section-header">
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
