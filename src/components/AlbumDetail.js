import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/Context";
import ArtistService from "../services/artistServices";
import { PrimaryButton, SecondaryButton } from "./UI/Buttons";
import Icon from "./UI/Icons";
import SongCover from "./UI/SongCover";
import SongInfo from "./UI/SongInfo";

function AlbumDetail(){
  const {data} = useContext(DataContext)
  const [firstArtist, setFirstArtist] = useState(null)
  const [artistInfo, setArtistInfo] = useState("")
  
  useEffect(()=>{
    if(data.data && data.data.length){
      const firstArtist = fetchArtist(data.data[0].artist.id)
      setFirstArtist(firstArtist)
    }else{
      console.log("not foound")
    }
  },[data])
  
  async function fetchArtist(artistId) {
      const dataService = new ArtistService();
      const data = await dataService.artist(artistId);
      console.log(data)
      setArtistInfo(data)
  }

  return(
    firstArtist ? 
    <div className="w-full  h-64 flex">
      <span className="xl:block hidden">
        <SongCover src={artistInfo["picture_medium"]} width="250px" height="100%">
          <Icon className=" " type="play" color="white" size="72px"></Icon>
        </SongCover>
      </span>
      <SongInfo src={artistInfo["picture_big"]} >
        <div className="h-24 flex flex-col justify-between">
          <p className="text-white text-2xl">{artistInfo.name}</p>
          <div className="h-44 flex flex-col justify-between">
            <div className="flex items-center w-60 justify-between">
              <p className="text-white text-sm">Lo mejor de Adele</p>
              <p className="text-xs"> {artistInfo.nb_fan} seguidores</p>
            </div>
          </div>
          <p className="text-white text-xs">Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica. </p>
        </div>
        <div className="flex items-center space-x-5">
          <PrimaryButton>Reproductor</PrimaryButton>
          <SecondaryButton>Seguir</SecondaryButton>
          <Icon type="dots" color="#FFFFFF" size="25px"></Icon>
        </div>
      </SongInfo>
    </div>
    : "Loading"
  )
}

export default AlbumDetail;