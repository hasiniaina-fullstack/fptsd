import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ end, duration = 1.6, suffix = "+" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const frameRate = 1000 / 60;
    const totalFrames = duration * 1000 / frameRate;
    const increment = end / totalFrames;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
