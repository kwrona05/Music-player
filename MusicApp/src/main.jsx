import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MusicPlayer from "./MusicPlayer";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MusicPlayer />
  </StrictMode>
);
