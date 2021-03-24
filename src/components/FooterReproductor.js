import Icon from "./UI/Icons";
import SongCover from "./UI/SongCover";

function FooterReproductor(){
  return(
    <div className="w-full m-auto h-full bg-red-500  flex box-border box-content	">
      <span className="sm:block hidden">
      <SongCover width="100px" height="100px" />

      </span>
      <div className=" flex justify-between w-11/12 items-center pt-6 pr-8 pb-4 pl-5 ">
        <div className="space-y-2"> 
          <p className="text-white text-sm">Cancion</p>
          <p className="text-white text-xs	">Artista - Album</p>
        </div>
        <div className="flex items-center space-x-5">
          <Icon type="previous" color="white" size="36px"></Icon>
          <Icon type="circlePlay" color="#F7A4A5" size="60px"></Icon>
          <Icon type="next" color="white" size="36px"></Icon>
        </div>

        <div className="flex items-center w-36 justify-between">
            <div className="w-24 bg-white h-1.5 flex justify-center items-center rounded-xl	">
          <div className="w-5 bg-white h-5 rounded-2xl "></div>
        </div>

          <Icon type="volume" color="white" size="36px"></Icon>

        </div>
        
      </div>



    </div>
  )
}

export default FooterReproductor;