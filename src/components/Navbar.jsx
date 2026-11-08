import { useEffect, useState } from "react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#details", label: "Details" },
  { href: "#countdown", label: "When" },
  { href: "#timeline", label: "Day" },
  { href: "#gallery", label: "Gallery" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#wishes", label: "Wishes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#top">
          R &amp; D
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
