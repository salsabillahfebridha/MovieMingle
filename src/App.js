import { useEffect, useState } from "react";
import "./App.css";
import { getTopMovieList, getPlayingMovieList, searchMovie } from "./api"; 
import NavbarExample from "./navbar";
import TopRated from "./TopRated";
import NowPlaying from "./NowPlaying";
import HomePage from "./Home";
import MovieDetails from './Details';
import Result from "./SearchResult";

const App = () => {
  const [activePage, setActivePage] = useState('home')
  const [TopRatedMovies, setTopRatedMovies] = useState([])
  const [NowPlayingMovies, setNowPlayingMovies] = useState([])
  const [SelectedMovie, setSelectedMovie] = useState(null)
  const [searchResults, setSearchResults] = useState([])
  
  useEffect(() => {
    getTopMovieList().then((result) => {
      setTopRatedMovies(result)
    })

    getPlayingMovieList().then((result) => {
      setNowPlayingMovies(result)
    })
  }, [])

  const handlePageChange = (page) => {
    setActivePage(page)
    setSelectedMovie(null)
    setSearchResults([])
  }

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setActivePage('details');
  };

  const handleSearch = async (q) => {
    try {
      const results = await searchMovie(q)
      console.log('Search Results:', results)
      setSearchResults(results)
      setActivePage('results')
    }
    catch (error) {
      console.error("Error fetching search results : ", error)
    }
  }

  const renderContent = () => {
    switch (activePage) {
      case 'home' :
        return (
          <HomePage />
        )
      case 'top-rated' :
        return (
          <TopRated TopRatedMovies={TopRatedMovies} onMovieClick={handleMovieClick} />
        )
      case 'now-playing':
        return (
          <NowPlaying NowPlayingMovies={NowPlayingMovies} onMovieClick={handleMovieClick} />
        )
      case 'details':
        return (
          <MovieDetails SelectedMovie={SelectedMovie} />
        )
      case 'results':
        return (
          <Result searchResults={searchResults} onMovieClick={handleMovieClick} />
        )
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <NavbarExample onPageChange={handlePageChange} onSearch={handleSearch} />
      {renderContent()}
    </div>
  );
}

export default App;