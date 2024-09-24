import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function MusicList({ addToWatchList }) {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://musicbrainz.org/ws/2/artist?query=beatles&fmt=json"
      );
      setMusics(response.data.artists || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Failed to fetch music data", error);
      toast.error("Something went wrong during fetching music data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = (music) => {
    addToWatchList(music);
    toast.success(`${music.name} added to your watchlist`);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : musics?.length === 0 ? (
        <p>No musics found</p>
      ) : (
        <ul>
          {Array.isArray(musics) &&
            musics?.map((music) => (
              <li key={music.id}>
                {music.name}
                <button onClick={() => handleAdd(music)}>
                  Add to watchlist
                </button>
              </li>
            ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
}
export default MusicList;
