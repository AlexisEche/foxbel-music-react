import { useContext } from "react";
import ReactPlayer from "react-player";
import { DataContext } from "../context/Context";

function MP3Player() {
  const {current} = useContext(DataContext)
  const {volume} = useContext(DataContext)
  const  currentVolume = volume/100
  return (
    <div>
      <ReactPlayer
        url={current.preview}
        style={
          {
            display:"none"
        }}
        width="400px"
        height="50px"
        playing={current ? true : false}
        controls={true}
        volume={currentVolume}
      />
    </div>
  );
}

export default MP3Player;