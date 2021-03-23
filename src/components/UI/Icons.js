import { BsThreeDots,BsThreeDotsVertical } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { RiPlayCircleFill } from "react-icons/ri";
import { IoPlaySkipBackSharp ,IoPlaySkipForwardSharp,IoVolumeOff} from "react-icons/io5";
import { ImSearch} from "react-icons/im";

const iconSet = {
  dots: BsThreeDots,
  play:FaPlay,
  dotsV:BsThreeDotsVertical,
  circlePlay:RiPlayCircleFill,
  previous:IoPlaySkipBackSharp,
  next:IoPlaySkipForwardSharp,
  volume:IoVolumeOff,
  search:ImSearch

}

function Icon({ type, color ,size,position}) {
  const ComponentToRender = iconSet[type];

  return (
      <ComponentToRender
        style={{
          fill:`${color}`,
          fontSize:`${size}`,
          position:`${position}`,
          top:"5px",
          right:"5px",
          background:`${size ==="60px"?"white":"none"}`,
          borderRadius:`${size ==="60px"? "50%" :"0"}` ,
          border: `${size ==="60px"? "1px solid #F47071" :"none"}`  ,
          boxShadow: `${size ==="60px"?"0px 0px 0px 6px #F7A4A5 inset":"none"}`,
      }}
      />
  );
}



export default Icon;
