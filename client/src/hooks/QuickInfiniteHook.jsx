import { useRef, useCallback } from "react";

const QuickInfiniteHook = (setPage) => {
  const observer = useRef(null);

  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  return { lastElementRef };
};

export default QuickInfiniteHook;
