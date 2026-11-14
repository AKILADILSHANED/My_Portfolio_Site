import { useState } from "react";
import Icon from "./Icon.jsx";
import CodeWindow from "./CodeWindow.jsx";
import { profile } from "../data.js";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-main">
          <img className="avatar" src={profile.photo} alt={`Portrait of ${profile.name}`} width="144" height="144" />
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-buttons">
            <a className="btn btn-primary" href={profile.cv.file} download>
              <Icon name="download" size={18} />
              {profile.cv.label}
            </a>
            <a className="btn btn-ghost" href="#projects">
              View my projects
            </a>
          </div>

          <ul className="contact-list">
            <li>
              <button type="button" className="contact-chip" onClick={copyEmail} title="Copy email address">
                <Icon name="mail" size={16} />
                <span>{profile.email}</span>
                <span className="chip-action">
                  <Icon name={copied ? "check" : "copy"} size={14} />
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </li>
            <li>
              <a className="contact-chip" href={profile.phoneHref}>
                <Icon name="phone" size={16} />
                <span>{profile.phone}</span>
              </a>
            </li>
            <li>
              <a className="contact-chip" href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={16} />
                <span>{profile.githubLabel}</span>
              </a>
            </li>
            <li>
              <span className="contact-chip contact-static">
                <Icon name="pin" size={16} />
                <span>{profile.location}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="hero-code">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
