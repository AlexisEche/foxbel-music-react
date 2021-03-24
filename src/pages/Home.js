import { useContext, useEffect, useState } from "react";
import AlbumDetail from "../components/AlbumDetail";
import ContainerAlbums from "../components/ContainerAlbums";
import FooterReproductor from "../components/FooterReproductor";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { DataContext } from "../context/Context";
import AlbumService from "../services/albumServices";

function Home(){
  const {data,setData} = useContext(DataContext)

//   useEffect(()=>{
//     async function fetchData() {
//       const dataService = new AlbumService();
//       const data = await dataService.search("dua lipa");
//       setData(data)
//   }
//   fetchData();

// },[])
//   console.log(data)    

  return(
    <div className="flex w-full flex-col">
      <div className="flex w-full ">
        <Sidebar/>
        <div className="flex flex-col pt-8 m-auto sm:w-10/12 w-full box-border xl:pr-4 xl:pl-10 xl:pr-10 xl:pr-4 pl-4  pr-4 ">
            <Header/>
            <AlbumDetail/>
            <ContainerAlbums/>
          </div>
      </div>
      <FooterReproductor/>
    </div>
  )
}

export default Home;