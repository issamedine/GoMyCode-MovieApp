import React, { Component } from "react";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.css";

function MovieList(props) {
  const filteredMovies = props.movieList.filter((movie) => (
    movie.title.toLowerCase().includes(props.searchInput.toLowerCase())
  ))
    // const filterStar = props.movieList.filter((movie) => (
    //   movie.rating.includes(props.searchStar)
    // ))
  
  return (
      <div className="row">
        {filteredMovies.map((movie, key) => 
            <MovieCard movie={movie} key={key} />
            )}
          {/* {filterStar.map((movie, key) => 
            <MovieCard movie={movie} key={key} />
            )} */}
      </div>
  );
}

export default MovieList;






