import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getTopMovieList = async () => {
    const Topmovie = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`)
    return Topmovie.data.results
}

export const getPlayingMovieList = async () => {
    const Playingmovie = await axios.get(`${baseUrl}/movie/now_playing?page=1&api_key=${apiKey}`)
    return Playingmovie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data.results
}