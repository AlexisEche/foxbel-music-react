import Icon from "./UI/Icons";
import SongCover from "./UI/SongCover";

function AlbumCard(){
  return(
    <div className="w-40 h-52	w-full relative ">
      <SongCover minWidth="100%" width="160px" height="160px" className="  ">
        <Icon  type="play" color="white" size="36px"/>
      </SongCover>
      <Icon position="absolute" type="dotsV" color="white" size="25px"/>
      <p className="pt-2 text-sm">21</p>
      <p className="text-sm">Adele</p>
    </div>
  )
}

export default AlbumCard;