import React from "react";
import HeroBanner from "../components/HeroBanner";
import FeatureIntro from "../components/FeatureIntro";
import LazySection from "../components/LazySection";

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <FeatureIntro />

      {/* Below-the-fold lazy loaded only after scroll */}
      <LazySection
        load={() => import("../components/Testimonials")}
        fallback={<div style={{ minHeight: 500 }}>Loading Testimonials...</div>}
      />
      <LazySection
        load={() => import("../components/Gallery")}
        fallback={<div style={{ minHeight: 500 }}>Loading Gallery...</div>}
      />
      <LazySection
        load={() => import("../components/FAQ")}
        fallback={<div style={{ minHeight: 500 }}>Loading FAQ...</div>}
      />
      <LazySection
        load={() => import("../components/Newsletter")}
        fallback={<div style={{ minHeight: 500 }}>Loading Newsletter...</div>}
      />
     
    </>
  );
};

export default Home;
