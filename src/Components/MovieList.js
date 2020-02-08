import React, { Component } from "react";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.css";

function MovieList(props) {
  const { searchInput, movieList, searchStar } = props;
  console.log("props", props);
  let filteredMovies = movieList;
  if (searchInput) {
    filteredMovies = filteredMovies.filter((movie) => (
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    ));
  }
  if (searchStar) {
    filteredMovies = filteredMovies.filter((movie) => (
      movie.rating == searchStar
    ));
  }
  console.log("filteredMovies", filteredMovies);
  
  return (
      <div className="row">
        {filteredMovies.map((movie, key) => 
            <MovieCard movie={movie} key={key} />
            )}
      </div>
  );
}

export default MovieList;






