import { wedding } from "../data/wedding";

export default function Footer() {
  return (
    <footer className="site-footer">
      <strong>
        {wedding.groom.first} and {wedding.bride.first}
      </strong>
      <p>
        {wedding.date.display} · {wedding.location.city}
      </p>
    </footer>
  );
}
