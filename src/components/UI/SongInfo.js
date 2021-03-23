import { BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "../../assets/styles/song-info.css"

function SongInfo({ img,  children}) {
  const ComponentToRender = "div";

  return (
      <ComponentToRender
        className="pt-10 pl-8 pb-5 	pr-8 flex z-10 bg-red-400 bg-opacity-25 flex-col justify-between"
        style={{
          background:`url(http://4.bp.blogspot.com/-3j54sIpjxD4/T7Fhg4C2Q7I/AAAAAAAAJMc/YxDMrG4mzcc/s1600/Adele6_DW_Kultur_K_1295526s.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover",
          width:"642px",
          height:"100%",
          display:"flex",
          justifyContent:"space-between",
          position: "relative",
          boxShadow: "inset 0 0 0 1000px rgba(167, 0, 0, 0.7)",
          opacity:"0.5",
          
      }}
      >{children}</ComponentToRender>
  );
}



export default SongInfo;
