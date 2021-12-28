//TMDB API
const API_KEY = "api_key=946df6f6dd6e733f1ab94bd24eeb052b";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        
        showMovies(data);
    })
}