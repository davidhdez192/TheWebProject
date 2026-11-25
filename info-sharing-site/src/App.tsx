import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import CatChibi from "./pages/CatChibi";
import CatBreeds from "./pages/CatBreeds";
import Layout from "./components/Layout";
import CatGallery from "./pages/CatGallery";
import GalleryLayout from "./components/GalleryLayout";
import MediaPlayer from "./components/MediaPlayer";
import DraggableBox from "./components/DraggableBox";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const tracks: Array<{ title: string; artist: string; src: string }> = [
  { title: "LYSINE", artist: "Yoshimi Kudou", src: "/music/LYSINE.mp3" },
  {
    title: "DEOXYRIBOSE",
    artist: "Yoshimi Kudou",
    src: "/music/DEOXYRIBOSE.mp3",
  },
];

function App() {
  return (
    <>
      <DraggableBox>
        <MediaPlayer tracks={tracks} />
      </DraggableBox>

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
    </>
    
  );
}

export default App;
