import axios from "axios";
import React, { useContext, useState } from "react";
import { GenreContext } from "../context/MoviesGenres";
const img = "https://image.tmdb.org/t/p/w500";

const Movies = ({ genres, top }) => {
  const genreContext = useContext(GenreContext);
  const [moviesByGenre, setMoviesByGenre] = useState([])

  const findSimilar = (id) => {
    genreContext.toggleGenre(id);
    axios.get(`/api/movie/bygenre/${id}`).then((res) => {
      setMoviesByGenre(res.data.results);
    });
  };

  return (
    <>
    <div>
      {genres.map((genre) => (
        <div className="btn" onClick={() => findSimilar(genre.id)}  key={genre.id}>
          {genre.name}
        </div>
      ))}
      </div>
{genreContext.findGenre ? <div className="container-fluid row align-items-center">
        {moviesByGenre.map((movies) => (
          <div
            key={movies.id}
            className="card col-md-3 d-flex container-fluid h-100"
          >
            <img src={`${img}${movies.poster_path}`} className="card-img-top" alt="posters"/>
            <p className="card-title card-body">{movies.title}</p>
          </div>
        ))}
      </div> : <div className="container-fluid row align-items-center">
        {top.map((topmovie) => (
          <div
            key={topmovie.id}
            className="card col-md-3 d-flex container-fluid "
          >
            <img src={`${img}${topmovie.poster_path}`} alt="posters"/>
            <p className="card-text">{topmovie.title}</p>
          </div>
        ))}
      </div> }
    </>
  );
};

export default Movies;
