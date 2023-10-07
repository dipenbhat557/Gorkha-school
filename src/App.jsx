import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import HeroFooter from "./components/HeroFooter";
import VideoTour from "./components/VideoTour";
import Specifications from "./components/Specifications";
import Messages from "./components/Messages";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Navbar />
      <ImageSlider />
      <HeroFooter />
      <VideoTour />
      <Specifications />
      <Messages />
      <Events />
      <Gallery />
      <Subscription />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
