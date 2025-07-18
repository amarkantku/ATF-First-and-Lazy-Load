import React, {
  useEffect,
  useRef,
  useState,
  Suspense,
  useCallback,
} from "react";
import ErrorBoundary from "./ErrorBoundary";

type ReactComponentType = React.ComponentType<any>;
type LazyComponentType = React.LazyExoticComponent<ReactComponentType>;

interface LazySectionProps {
  load: () => Promise<{ default: ReactComponentType }>;
  fallback?: React.ReactNode;
  rootMargin?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  load,
  fallback = null,
  rootMargin = "200px",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasLoadedRef = useRef<boolean>(false);
  const [Component, setComponent] = useState<LazyComponentType | null>(null);

  // Memoize load to avoid useEffect re-run if load is stable
  const memoizedLoadFn = useCallback(load, [load]);

  useEffect(() => {
    if (hasLoadedRef.current) return; // Already loaded

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !Component && !hasLoadedRef.current) {
          const LazyComp = React.lazy(memoizedLoadFn);
          setComponent(() => LazyComp);
          hasLoadedRef.current = true;
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [memoizedLoadFn, Component, rootMargin]);

  return (
    <div ref={ref}>
      {Component ? (
        <ErrorBoundary fallback={fallback}>
          <Suspense fallback={fallback}>
            <Component />
          </Suspense>
        </ErrorBoundary>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;

// function LazySection({ load, fallback }) {
//   const [Component, setComponent] = useState(null);

//   useEffect(() => {
//     let isMounted = true;
//     load().then((mod) => {
//       if (isMounted) setComponent(() => mod.default);
//     });
//     return () => {
//       isMounted = false;
//     };
//   }, [load]);
//
//   return Component ? <Component /> : fallback;
// }
