import React from "react";
import AudioPlayer from "./Audioplayer";

const AUDIO_FILE = "./sharjah.mp3";

function App() {
  return (
    <div className="container">
      <AudioPlayer audioSrc={AUDIO_FILE} />
    </div>
  );
}

export default App;