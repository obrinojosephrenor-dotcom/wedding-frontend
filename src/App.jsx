import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home        from "./pages/Home";
import RSVP        from "./pages/RSVP";
import Details     from "./pages/Details";
import Gallery     from "./pages/Gallery";
import PhotoPage   from "./pages/PhotoPage";
import LoveStory   from "./pages/LoveStory";
import GuestUpload from "./pages/GuestUpload";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/rsvp"        element={<RSVP />} />
        <Route path="/details"     element={<Details />} />
        <Route path="/gallery"     element={<Gallery />} />
        <Route path="/gallery/:id" element={<PhotoPage />} />
        <Route path="/love-story"  element={<LoveStory />} />
        <Route path="/upload"      element={<GuestUpload />} />
      </Routes>
    </BrowserRouter>
  );
}
