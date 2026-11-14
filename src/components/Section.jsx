export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <h2 className="section-title">
          <span className="t-cm" aria-hidden="true">
            //{" "}
          </span>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
