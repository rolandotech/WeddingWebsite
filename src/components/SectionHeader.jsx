import BotanicalMark from "./BotanicalMark";

export default function SectionHeader({ kicker, title, subtitle }) {
  return (
    <header className="section-header">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 className="section-title">{title}</h2>
      <BotanicalMark />
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
