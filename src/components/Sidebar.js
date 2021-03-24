import logo from "../assets/images/foxbel-music.png";

const librerias = [
	"Recientes",
	"Artistas",
	"Álbumes",
	"Canciones",
	"Estaciones",
];
const playlists = ["Metal", "Rock 90s", "Baladas", "Para Bailar"];

function Sidebar() {
	return (
		<div className="w-80	bg-red-900	h-11/12 space-y-7 xl:block hidden">
			<img className="w-80 h-15 pt-12 pr-10 pl-10 " src={logo} alt="logo" />
			<div className="flex flex-col space-y-1">
				<p className="text-white text-xl border-l-4 border-red-900 	pl-9">
					Mi librería
				</p>
				{librerias.map((libreria) => {
					return (
						<p
							key={libreria}
							className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9"
						>
							{libreria}
						</p>
					);
				})}
			</div>
			<div className="flex flex-col space-y-1">
				<p className="text-white pl-9 text-xl border-l-4 border-red-900 ">
					Playlist
				</p>
				{playlists.map((playlist) => {
					return (
						<p
							key={playlist}
							className="text-white border-l-4 cursor-pointer	border-red-900 hover:border-red-400 hover:text-red-400  pl-9"
						>
							{playlist}
						</p>
					);
				})}
			</div>
		</div>
	);
}

export default Sidebar;
