import SectionHeader from "./SectionHeader";
import { useCountdown } from "../hooks/useCountdown";
import { wedding } from "../data/wedding";

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function Countdown() {
  const remaining = useCountdown(wedding.date.iso);

  return (
    <section className="section section--forest countdown" id="countdown">
      <div className="wrap countdown__inner">
        <SectionHeader
          kicker="Until we gather"
          title={remaining.complete ? "The day is here" : "A little while longer"}
          subtitle={wedding.date.display}
        />
        {remaining.complete ? (
          <p>We are celebrating today. Thank you for being part of it.</p>
        ) : (
          <div className="countdown__grid" role="timer" aria-live="polite">
            {[
              ["Days", remaining.days],
              ["Hours", remaining.hours],
              ["Minutes", remaining.minutes],
              ["Seconds", remaining.seconds],
            ].map(([label, value]) => (
              <div className="count-cell" key={label}>
                <strong>{label === "Days" ? value : pad(value)}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
