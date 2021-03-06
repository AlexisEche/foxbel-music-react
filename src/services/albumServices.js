import { BASE_URL, apiFetch } from "./apiFetch";
import PUBLIC_KEY from "./constant";
function AlbumService() {
	if (!AlbumService.instance) {
		AlbumService.instance = this;
	}
	return AlbumService.instance;
}

AlbumService.prototype.search = (artist) =>
	apiFetch(`${BASE_URL}/search?q=${artist}`, {
		method: "GET",
		headers: {
			"x-rapidapi-key": `${PUBLIC_KEY}`,
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		},
	});

export default AlbumService;
