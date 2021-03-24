import { useContext, useState} from "react";
import { DataContext } from "../context/Context";
import AlbumCard from "./AlbumCard";

function ContainerAlbums(){
  const {data} = useContext(DataContext)
  
  return(
    data.data?<>
      <p className="pt-10 text-xl pb-5 text-red-400">Resultados</p>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2   gap-4 pb-28 ">
        {data.data.slice(15).map((album)=>{
          return <AlbumCard key={album.id} data={album}/>
        })}
      </div>
      
    </>: "Loading"
  )
}

export default ContainerAlbums;