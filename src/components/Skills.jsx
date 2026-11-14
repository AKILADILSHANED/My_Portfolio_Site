import { useState } from "react";
import Section from "./Section.jsx";
import { skills } from "../data.js";

export default function Skills() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? skills : skills.filter((s) => s.id === filter);

  return (
    <Section id="skills" title="Skills">
      <div className="filters" role="group" aria-label="Filter skills">
        <button
          type="button"
          className={`filter ${filter === "all" ? "filter-active" : ""}`}
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        {skills.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`filter ${filter === s.id ? "filter-active" : ""}`}
            aria-pressed={filter === s.id}
            onClick={() => setFilter(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="skill-grid">
        {visible.map((group) => (
          <div className="skill-group" key={group.id}>
            <h3>{group.label}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li className="chip chip-hover" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
