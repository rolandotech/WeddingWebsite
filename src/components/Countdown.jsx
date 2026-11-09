import { useCountdown } from "../hooks/useCountdown";
import { wedding } from "../data/wedding";

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function Countdown() {
  const remaining = useCountdown(wedding.date.iso);

  return (
    <div className="countdown" id="countdown">
      <div className="countdown__grid" role="timer" aria-live="polite">
        {[
          ["Days", remaining.complete ? 0 : remaining.days],
          ["Hours", remaining.complete ? 0 : remaining.hours],
          ["Minutes", remaining.complete ? 0 : remaining.minutes],
          ["Seconds", remaining.complete ? 0 : remaining.seconds],
        ].map(([label, value]) => (
          <div className="count-cell" key={label}>
            <strong>{label === "Days" ? value : pad(value)}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      {remaining.complete ? <p className="hero__date">Countdown finished!</p> : null}
    </div>
  );
}
