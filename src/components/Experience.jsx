import { useState } from "react";
import Section from "./Section.jsx";
import { experience } from "../data.js";

export default function Experience() {
  const [group, setGroup] = useState(experience.groups[0].id);
  const current = experience.groups.find((g) => g.id === group);

  return (
    <Section id="experience" title="Experience">
      <div className="exp">
        <div className="exp-head">
          <div>
            <h3>{experience.company}</h3>
            <p className="exp-role">{experience.role}</p>
          </div>
          <p className="exp-period">{experience.period}</p>
        </div>

        <div className="exp-layout">
          <ol className="path" aria-label="Career path in the company">
            {experience.path.map((step, i) => (
              <li key={step} className={i === experience.path.length - 1 ? "path-current" : ""}>
                {step}
              </li>
            ))}
          </ol>

          <div>
            <div className="segmented" role="tablist" aria-label="Type of work">
              {experience.groups.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={g.id === group}
                  className={`segment ${g.id === group ? "segment-active" : ""}`}
                  onClick={() => setGroup(g.id)}
                >
                  {g.label}
                </button>
              ))}
            </div>
            <ul className="bullets" role="tabpanel">
              {current.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
