import Section from "./Section.jsx";
import { about } from "../data.js";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="about-grid">
        <div className="prose">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="facts" aria-label="Quick facts">
          <div className="facts-brace">{"{"}</div>
          {about.facts.map(([key, value]) => (
            <div className="fact" key={key}>
              <dt>{key}:</dt>
              <dd>"{value}"</dd>
            </div>
          ))}
          <div className="facts-brace">{"}"}</div>
        </dl>
      </div>
    </Section>
  );
}
