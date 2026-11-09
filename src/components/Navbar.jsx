import { useEffect, useState } from "react";
import { wedding } from "../data/wedding";

const links = [
  { href: "#story", label: "Story" },
  { href: "#dress", label: "Dress" },
  { href: "#details", label: "Venue" },
  { href: "#faq", label: "FAQ" },
  { href: "#timeline", label: "Timeline" },
  { href: "#gallery", label: "Photos" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-nav ${open ? "is-open" : ""}`}>
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#top">
          {wedding.groom.first} and {wedding.bride.first}
        </a>
        <nav aria-label="Primary">
          <ul className="site-nav__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="site-nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
      <nav id="mobile-nav" className="site-nav__drawer" aria-label="Mobile">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
