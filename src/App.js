import {PrimaryButton, SecondaryButton} from './components/UI/Buttons';
import AlbumCard from './components/AlbumCard';
import AlbumDetail from './components/AlbumDetail';
import ContainerAlbums from './components/ContainerAlbums';
import FooterReproductor from './components/FooterReproductor';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      
      <PrimaryButton>Reproductor</PrimaryButton>
      <Search/>
      <SecondaryButton>Seguir</SecondaryButton>
      <AlbumDetail/>
      <AlbumCard/>
      <FooterReproductor/>
      <Sidebar/>


    </div>
  );
}

export default App;
