import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home      from "./pages/Home";
import RSVP      from "./pages/RSVP";
import Details   from "./pages/Details";
import LoveStory from "./pages/LoveStory";
import Entourage from "./pages/Entourage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/rsvp"        element={<RSVP />} />
        <Route path="/details"     element={<Details />} />
        <Route path="/love-story"  element={<LoveStory />} />
        <Route path="/entourage"   element={<Entourage />} />
      </Routes>
    </BrowserRouter>
  );
}
