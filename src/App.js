import React from "react";
import ReactPlayer from "react-player";
import "./App.css";
// const VIDEO_FILE =
//   "https://www.youtube.com/watch?v=fY-Wq0k_9P4&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=22";

const VIDEO_FILE = "./playvideo.mp4"
const App = () => {
  return (
    <div className="App">
      <ReactPlayer 
      
      width="480px" 
      height="240px" 
      controls url={VIDEO_FILE} 
      onReady={() => console.log('onReady Callback')}
      onStart={() => console.log('onStart Callback')}
      onPause={() => console.log('onPause Callback')}
      onEnded={() => console.log('onEnded Callback')}
      onError={() => console.log('onError Callback')}
      />
    </div>
  );
};
export default App;
