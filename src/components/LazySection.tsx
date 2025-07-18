import React, { useEffect, useRef, useState, Suspense } from "react";

type ReactComponentType = React.ComponentType<any>;
type LazyComponentType = React.LazyExoticComponent<ReactComponentType>;

interface LazySectionProps {
  load: () => Promise<{ default: ReactComponentType }>;
  fallback?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({ load, fallback = null }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [Component, setComponent] = useState<LazyComponentType | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !Component) {
          const LazyComp = React.lazy(load);
          setComponent(() => LazyComp);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [load, Component]);

  return (
    <div ref={ref}>
      {Component ? (
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
