import { useState } from "react";
import MusicList from "./MusicList";
import WatchList from "./WatchList";
import "./Music.css";

function MusicPlayer() {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (music) => {
    if (!watchList.includes(music)) {
      setWatchList(...watchList, music);
    }
  };

  return (
    <div className="container">
      <h1>Music Player</h1>
      <MusicList addToWatchList={addToWatchList} />
      <WatchList watchList={watchList} />
    </div>
  );
}
export default MusicPlayer;
