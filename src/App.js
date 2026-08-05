import './App.css';
import './MediaQueries.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ThePersonBehind from './Pages/ThePersonBehind';
import ArtGallery from './Pages/ArtGallery';
import Shop from './Pages/Shop';
import LetsConnect from './Pages/LetsConnect';
import PaintingDetails from './Pages/PaintingDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paintings from './typesOfPaintings/Paintings';
import Charcoals from './typesOfPaintings/CharcoalSketches';
import Digital from './typesOfPaintings/DigitalArt';
import ColouredPencil from './typesOfPaintings/ColouredPencil';
import MixedMedia from './typesOfPaintings/MixedMedia';
import PenSketches from './typesOfPaintings/PenSketches';
import WatercolorPaintings from './typesOfPaintings/WatercolorPaintings';


 



function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-person-behind" element={<ThePersonBehind />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/charcoal-sketches" element={<Charcoals />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/lets-connect" element={<LetsConnect />} />
          <Route path="/digital-art" element={<Digital />} />
          <Route path="/colouredPencil" element={<ColouredPencil />} />
            <Route path="/Mixed-Media" element={<MixedMedia />} />
              <Route path="/pen-sketches" element={<PenSketches/>} />
              '   <Route path="/watercolor-paintings" element={<WatercolorPaintings/>} />

          <Route path="/painting/:apiType/:id"  element={<PaintingDetails />} />
        

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
