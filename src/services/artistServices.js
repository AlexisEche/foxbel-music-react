import { BASE_URL , apiFetch } from "./api-fetch"

function ArtistService() {
  if (!ArtistService.instance) {
    ArtistService.instance = this;
  }
  return ArtistService.instance;
}

ArtistService.prototype.artist = (idArtist="") =>
  apiFetch(`${BASE_URL}/artist/${idArtist}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "90ec5dbb7dmshebb42ca96933b59p1c5af4jsn662fde840c65",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },

  });

export default ArtistService;