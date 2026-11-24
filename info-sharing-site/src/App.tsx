import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import CatChibi from "./pages/CatChibi";
import CatBreeds from "./pages/CatBreeds";
import Layout from "./components/Layout";
import CatGallery from "./pages/CatGallery";
import GalleryLayout from "./components/GalleryLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat-breeds" element={<CatBreeds />} />
          <Route path="/cat-chibi" element={<CatChibi />} />
        </Route>

        <Route element={<GalleryLayout />}>
          <Route path="/cat-gallery" element={<CatGallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
