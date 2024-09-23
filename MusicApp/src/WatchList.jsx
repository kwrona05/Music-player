function WatchList({ watchList }) {
  return (
    <div>
      <h2>Watchlist</h2>
      {watchList.length === 0 ? (
        <p>No musics found</p>
      ) : (
        watchList.map((music) => {
          <div key={music.id}>
            <h3>{music.name}</h3>
          </div>;
        })
      )}
    </div>
  );
}
export default WatchList;
