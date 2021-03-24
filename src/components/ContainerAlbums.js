import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/Context";
import AlbumService from "../services/albumServices";
import AlbumCard from "./AlbumCard";

function ContainerAlbums(){
  const count =[1,2,3,6,6,4]
  const {data} = useContext(DataContext)

  const albums = data.data.slice(15) 

    // const albums = album.data.slice(15)
    
  return(
    <>
      <p className="pt-10">Resultados</p>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2   gap-4 pb-28 ">
        {albums.map((album)=>{
          return <AlbumCard key={album.id} data={album}/>
        })}
      </div>
      
    </>
  )
}

export default ContainerAlbums;