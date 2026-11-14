import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p className="footer-code">
          <span className="t-kw">const</span> site = <span className="t-str">"React + Vite"</span>;
        </p>
      </div>
    </footer>
  );
}
