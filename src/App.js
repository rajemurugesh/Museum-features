import React from "react";
import AudioPlayer from "./Audioplayer";

const AUDIO_FILE = "https://storiestogrowby.org/wp-content/uploads/2016/03/Fur-Feather-Africa.mp3?_=1";

function App() {
  return (
    <div className="container">
      <AudioPlayer audioSrc={AUDIO_FILE} />
    </div>
  );
}

export default App;