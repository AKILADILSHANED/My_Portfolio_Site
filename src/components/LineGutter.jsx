import { useEffect, useState } from "react";

const LINE_HEIGHT = 28;

// Line numbers down the left edge of the page, like a code editor gutter.
export default function LineGutter() {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const update = () => setCount(Math.ceil(document.body.scrollHeight / LINE_HEIGHT));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="gutter" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>{i + 1}</span>
      ))}
    </div>
  );
}
