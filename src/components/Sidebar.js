import logo from "../assets/images/foxbel-music.png"
function Sidebar(){
  return(
    <div className="w-80	bg-red-900	h-screen space-y-7">
      <img className="w-80 h-15 pt-12 pr-10 pl-10 " src={logo} alt="logo"/>
      <div className="flex flex-col space-y-1">
        <p className="text-white text-xl	pl-9">Mi librería</p>
        <p className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9">Recientes</p>
        <p className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9">Artistas</p>
        <p className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9">Álbumes</p>
        <p className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9">Canciones</p>
        <p className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9">Estaciones</p>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-white pl-9 text-xl">Playlist</p>
        <p className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9">Metal</p>
        <p className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9">Rock 90s</p>
        <p className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9">Baladas</p>
        <p className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9">Para Bailar</p>
      </div>
    </div>
  )
}

export default Sidebar;