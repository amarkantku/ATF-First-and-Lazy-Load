import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import FeatureIntro from "./components/FeatureIntro";
import LazySection from "./components/LazySection";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      {/* Above-the-fold */}
      <Header />
      <HeroBanner />
      <FeatureIntro />

      {/* Below-the-fold lazy loaded only after scroll */}
      <LazySection
        load={() => import("./components/Testimonials")}
        fallback={<div style={{ minHeight: 500 }}>Loading Testimonials...</div>}
      />
      <LazySection
        load={() => import("./components/Gallery")}
        fallback={<div style={{ minHeight: 500 }}>Loading Gallery...</div>}
      />
      <LazySection
        load={() => import("./components/FAQ")}
        fallback={<div style={{ minHeight: 500 }}>Loading FAQ...</div>}
      />
      <LazySection
        load={() => import("./components/Newsletter")}
        fallback={<div style={{ minHeight: 500 }}>Loading Newsletter...</div>}
      />
      {/* Footer lazy loaded */}
      <LazySection
        load={() => import(/* webpackPrefetch: false */ "./components/Footer")}
        fallback={<div style={{ minHeight: 200 }}>Loading Footer...</div>}
      />
    </>
  );
};

export default App;
