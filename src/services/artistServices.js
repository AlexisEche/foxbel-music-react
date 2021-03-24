import { BASE_URL, apiFetch } from "./apiFetch";
import PUBLIC_KEY from "./constant";

function ArtistService() {
	if (!ArtistService.instance) {
		ArtistService.instance = this;
	}
	return ArtistService.instance;
}

ArtistService.prototype.artist = (idArtist = "") =>
	apiFetch(`${BASE_URL}/artist/${idArtist}`, {
		method: "GET",
		headers: {
			"x-rapidapi-key": `${PUBLIC_KEY}`,
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		},
	});

export default ArtistService;
