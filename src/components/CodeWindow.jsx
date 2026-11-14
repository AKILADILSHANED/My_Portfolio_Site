import { useEffect, useState } from "react";
import { highlight } from "./highlight.jsx";

const CODE = `const akila = {
  role: "Software engineer",
  domain: "Finance and insurance systems",
  experience: "10 years at SLIC General",
  degree: "BSc (Hons) Software Engineering",
  honours: "First Class",
  stack: [
    "Java", "Spring Boot", "Next.js",
    "React", "MySQL",
  ],
  lookingFor: "A full-time engineering role",
};

export default akila;`;

// The one animated moment on the page: the profile "types itself" once.
export default function CodeWindow() {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduceMotion ? CODE.length : 0);

  useEffect(() => {
    if (reduceMotion) return;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setN((v) => {
          if (v >= CODE.length) {
            clearInterval(id);
            return v;
          }
          return v + 1;
        });
      }, 22);
    }, 500);
    return () => clearTimeout(start);
  }, [reduceMotion]);

  const lines = CODE.slice(0, n).split("\n");
  const done = n >= CODE.length;

  return (
    <div className="window" role="img" aria-label="A code editor showing a summary of Akila's profile as a JavaScript object">
      <div className="window-bar">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="window-tab">akila.js</span>
      </div>
      <pre className="window-code" aria-hidden="true">
        {lines.map((line, i) => (
          <div className="cl" key={i}>
            {highlight(line)}
            {i === lines.length - 1 && <span className={`caret ${done ? "caret-idle" : ""}`} />}
          </div>
        ))}
      </pre>
      <div className="window-status" aria-hidden="true">
        <span>JavaScript</span>
        <span>
          Ln {lines.length}, UTF-8
        </span>
      </div>
    </div>
  );
}
