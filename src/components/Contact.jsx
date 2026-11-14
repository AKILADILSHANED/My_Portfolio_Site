import Section from "./Section.jsx";
import Icon from "./Icon.jsx";
import { profile } from "../data.js";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="contact-lead">
        I'm looking for a full-time software engineering role. If you'd like to talk about an opening or see a
        walkthrough of my work, send me a message.
      </p>
      <div className="contact-buttons">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <Icon name="mail" size={18} />
          Email me
        </a>
        <a className="btn btn-ghost" href={profile.phoneHref}>
          <Icon name="phone" size={18} />
          {profile.phone}
        </a>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
          <Icon name="github" size={18} />
          GitHub
        </a>
        <a className="btn btn-ghost" href={profile.cv.file} download>
          <Icon name="download" size={18} />
          {profile.cv.label}
        </a>
      </div>
    </Section>
  );
}
