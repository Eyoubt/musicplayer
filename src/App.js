import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";

// Import data file
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
    </div>
  );
}

export default App;
