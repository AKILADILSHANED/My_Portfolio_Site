import { useEffect, useState } from "react";
import Section from "./Section.jsx";
import Icon from "./Icon.jsx";
import { projects } from "../data.js";

// Shows the screenshot, or a clear placeholder if the file is not added yet.
function Shot({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);

  if (failed) {
    return (
      <div className={`shot-missing ${className}`}>
        <Icon name="image" size={28} />
        <strong>Screenshot goes here</strong>
        <code>public{src}</code>
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />;
}

function Lightbox({ project, index, onClose, onMove }) {
  const shot = project.screenshots[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onMove(-1);
      if (e.key === "ArrowRight") onMove(1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onMove]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} screenshots`} onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <Shot className="lightbox-img" src={shot.src} alt={`${project.title}: ${shot.caption}`} />
        <p className="lightbox-caption">
          {shot.caption} ({index + 1} of {project.screenshots.length})
        </p>
      </div>
      <button type="button" className="icon-btn lightbox-close" onClick={onClose} aria-label="Close" autoFocus>
        <Icon name="x" />
      </button>
      {project.screenshots.length > 1 && (
        <>
          <button
            type="button"
            className="icon-btn lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              onMove(-1);
            }}
            aria-label="Previous screenshot"
          >
            <Icon name="left" />
          </button>
          <button
            type="button"
            className="icon-btn lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              onMove(1);
            }}
            aria-label="Next screenshot"
          >
            <Icon name="right" />
          </button>
        </>
      )}
    </div>
  );
}

function Gallery({ project }) {
  const shots = project.screenshots;
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const move = (d) => setIndex((i) => (i + d + shots.length) % shots.length);

  return (
    <div className="gallery">
      <div className="browser">
        <div className="browser-bar">
          <span className="dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-url">{project.urlLabel}</span>
        </div>
        <button
          type="button"
          className="browser-stage"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge screenshot: ${shots[index].caption}`}
        >
          <Shot className="stage-img" src={shots[index].src} alt={`${project.title}: ${shots[index].caption}`} />
        </button>
      </div>

      <div className="gallery-meta">
        <span className="gallery-caption">{shots[index].caption}</span>
        <span className="gallery-controls">
          <button type="button" className="icon-btn icon-btn-small" onClick={() => move(-1)} aria-label="Previous screenshot">
            <Icon name="left" size={16} />
          </button>
          <button type="button" className="icon-btn icon-btn-small" onClick={() => move(1)} aria-label="Next screenshot">
            <Icon name="right" size={16} />
          </button>
        </span>
      </div>

      <div className="thumbs" role="tablist" aria-label="Screenshots">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`thumb ${i === index ? "thumb-active" : ""}`}
            onClick={() => setIndex(i)}
            title={s.caption}
          >
            <Shot className="thumb-img" src={s.src} alt={s.caption} />
          </button>
        ))}
      </div>

      {open && <Lightbox project={project} index={index} onClose={() => setOpen(false)} onMove={move} />}
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="project-list">
        {projects.map((p) => (
          <article className="project" key={p.id}>
            <Gallery project={p} />
            <div className="project-body">
              <p className="project-status">
                <span className="status-dot" aria-hidden="true" />
                {p.status}
              </p>
              <h3>{p.title}</h3>
              <p className="project-summary">{p.summary}</p>

              <ul className="feature-list">
                {p.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={15} />
                    {f}
                  </li>
                ))}
              </ul>

              <ul className="chips" aria-label="Technologies used">
                {p.tech.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="project-link">
                <a className="btn btn-primary" href={p.url} target="_blank" rel="noreferrer">
                  <Icon name="external" size={17} />
                  Open live demo
                </a>
                <a className="url-text" href={p.url} target="_blank" rel="noreferrer">
                  {p.url}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
