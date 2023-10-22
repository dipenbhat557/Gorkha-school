import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const ImageSlider = lazy(() => import("./components/ImageSlider"));
const HeroFooter = lazy(() => import("./components/HeroFooter"));
const VideoTour = lazy(() => import("./components/VideoTour"));
const Specifications = lazy(() => import("./components/Specifications"));
const Messages = lazy(() => import("./components/Messages"));
const Events = lazy(() => import("./components/Events"));
const Gallery = lazy(() => import("./components/Gallery"));
const Subscription = lazy(() => import("./components/Subscription"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
