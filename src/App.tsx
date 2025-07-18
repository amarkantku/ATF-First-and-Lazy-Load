import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import LazySection from "./components/LazySection";
import Home from "./pages/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      {/* Above-the-fold */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      {/* Footer lazy loaded */}
      <LazySection
        load={() => import("./components/Footer")}
        fallback={<div style={{ minHeight: 200 }}>Loading Footer...</div>}
      />
    </>
  );
};

export default App;
