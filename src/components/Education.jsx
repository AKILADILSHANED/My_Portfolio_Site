import Section from "./Section.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {education.map((e) => (
          <li className="timeline-item" key={e.title}>
            <span className="timeline-year">{e.year}</span>
            <div>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
