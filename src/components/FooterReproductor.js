import { useContext } from "react";
import { DataContext } from "../context/Context";
import FooterNoData from "./UI/FooterNoData";
import Icon from "./UI/Icons";
import Range from "./UI/Range";
import SongCover from "./UI/SongCover";

function FooterReproductor(){
  const { current } = useContext(DataContext)

  return(
    current.length !== 0 ?
    <div className="w-full m-auto h-full bg-red-500  flex box-border box-content	">
      <span className="sm:block hidden">
      <SongCover src={current.album.cover} width="100px" height="100px" />
      </span>
      <div className=" flex justify-between w-11/12 items-center pt-6 pr-8 pb-4 pl-5 ">
        <div className="space-y-2"> 
          <p className="text-white text-sm">{current.title} </p>
          <p className="text-white text-xs	">{current.artist.name} - {current.album.title}</p>
        </div>
        <div className="flex items-center space-x-5">
          <Icon type="previous" color="white" size="36px"></Icon>
          <Icon type="circlePlay" color="#F7A4A5" size="60px"></Icon>
          <Icon type="next" color="white" size="36px"></Icon>
        </div>
        <div className="flex items-center w-36 justify-between">
            <Range/>
          <Icon type="volume" color="white" size="36px"></Icon>
        </div>
      </div>
    </div>: <FooterNoData/>
  )
}

export default FooterReproductor;