import React, { useState } from 'react';
import unirest from 'unirest';
import './App.css';
import Movie from "./Movie.jsx";
import Search from './Search';

function App() {
  const [movies, setMovies] = useState([]);

  const sendRequest = (title) => {
    const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
    req.query({
      "page": "1",
      "r": "json",
      "s": title
    });
    req.headers({
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "a2481a5397msh2e53e64f12a2965p1f97ccjsna872d2d55778"
    });
    req.end((res) => {
      if (res.error) throw new Error(res.error);
      const movies = res.body.Search;
      setMovies(movies);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Search handleSendRequest={sendRequest} />
        {movies.map((movie) => (
          <Movie key={movie.imdbID} Title={movie.Title} Poster={movie.Poster} Year={movie.Year} />
        ))}
      </header>
    </div>
  );
}

export default App;
