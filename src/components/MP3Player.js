import { useContext } from "react";
import ReactPlayer from "react-player";
import { DataContext } from "../context/Context";

function MP3Player() {
  const {current} = useContext(DataContext)
  return (
    <div>
      <ReactPlayer
        url={current}
        style={
          {
        }}
        width="400px"
        height="50px"
        playing={current ? true : false}
        controls={true}
      />
    </div>
  );
}

export default MP3Player;