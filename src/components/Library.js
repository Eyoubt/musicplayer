import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  isPlaying,
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Music Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            currentSong={currentSong}
            isPlaying={isPlaying}
            audioRef={audioRef}
            setCurrentSong={setCurrentSong}
            song={song}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
