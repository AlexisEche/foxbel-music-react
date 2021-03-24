import { BsThreeDots,BsThreeDotsVertical } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { RiPlayCircleFill } from "react-icons/ri";
import { IoPlaySkipBackSharp ,IoPlaySkipForwardSharp,IoVolumeOff} from "react-icons/io5";
import { ImSearch} from "react-icons/im";
import { FaUser} from "react-icons/fa";
import { GiHamburgerMenu} from "react-icons/gi";

const iconSet = {
  dots: BsThreeDots,
  play:FaPlay,
  dotsV:BsThreeDotsVertical,
  circlePlay:RiPlayCircleFill,
  previous:IoPlaySkipBackSharp,
  next:IoPlaySkipForwardSharp,
  volume:IoVolumeOff,
  search:ImSearch,
  user:FaUser,
  menu:GiHamburgerMenu,
}

function Icon({ type, color ,size,position, onClick}) {
  const ComponentToRender = iconSet[type];

  return (
      <ComponentToRender 
        onClick={onClick}
        style={{
          fill:`${color}`,
          fontSize:`${size}`,
          position:`${position}`,
          top:"5px",
          right:"5px",
          background:`${type ==="circlePlay"?"white":"none"}`,
          borderRadius:`${type ==="circlePlay"? "50%" :"0"}` ,
          border: `${type ==="circlePlay"? "1px solid #F47071" :"none"}`  ,
          boxShadow: `${type ==="circlePlay"?"0px 0px 0px 6px #F7A4A5 inset":"none"}`,
          cursor:"pointer"
      }}
      />
  );
}



export default Icon;
