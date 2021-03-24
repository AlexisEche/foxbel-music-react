import { BASE_URL , apiFetch } from "./api-fetch"
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
      "x-rapidapi-key": "90ec5dbb7dmshebb42ca96933b59p1c5af4jsn662fde840c65",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },

  });

export default AlbumService;