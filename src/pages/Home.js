import AlbumDetail from "../components/AlbumDetail";
import ContainerAlbums from "../components/ContainerAlbums";
import FooterReproductor from "../components/FooterReproductor";
import Header from "../components/Header";
import MP3Player from "../components/MP3Player";
import Sidebar from "../components/Sidebar";

function Home(){

  return(
    <div className="flex w-full flex-col">
      <div className="flex w-full">
        <Sidebar/>
        <div className="flex flex-col pt-8 m-auto sm:w-10/12 w-full box-border xl:pr-4 xl:pl-10 xl:pr-10 xl:pr-4 pl-4  pr-4">
            <Header/>
            <AlbumDetail/>
            <ContainerAlbums/>
          </div>
      </div>
      <FooterReproductor/>
      <MP3Player/>
    </div>
  )
}

export default Home;