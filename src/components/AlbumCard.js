import { useContext } from "react";
import { DataContext } from "../context/Context";
import Icon from "./UI/Icons";
import SongCover from "./UI/SongCover";

function AlbumCard({data}){
  const {setCurrent, current} = useContext(DataContext)
  return(
    <div className="w-40 h-52	w-full relative ">
      <SongCover src={data.album["cover_medium"]} minWidth="100%" width="160px" height="160px">
        <Icon onClick={()=>setCurrent(data)} type="play" color="white" size="36px"/>
      </SongCover>
      <Icon position="absolute" type="dotsV" color="white" size="25px"/>
      <p className="pt-2 text-sm">{data.artist["name"]}</p>
      <p className="text-sm">{data.album["title"]}</p>
    </div>
  )
}

export default AlbumCard;