import { useState } from "react";
import Icon from "./Icon.jsx";
import { profile, sections } from "../data.js";

export default function Navbar({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <nav className={`tabs ${open ? "tabs-open" : ""}`} aria-label="Sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`tab ${active === s.id ? "tab-active" : ""}`}
              aria-current={active === s.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-small btn-ghost nav-cv" href={profile.cv.file} download>
            <Icon name="download" size={16} />
            CV
          </a>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button
            type="button"
            className="icon-btn nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
