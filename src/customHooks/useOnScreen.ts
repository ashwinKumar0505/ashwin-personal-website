import { useState, useEffect } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    {
      rootMargin: "-50% 0% -50% 0%",
      threshold: 0,
    }
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  return isOnScreen;
};
