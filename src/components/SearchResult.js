import React from "react";
import MovieCard from "../MovieCard/MovieCard";


export default function SearchResult(props) {
  // funtion render list movie
  const renderMovieList = () => {
    if (!props.searchData || props.searchData.Response === "False") return;

    return props.searchData.Search.map((movie, index) => {
      return (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          getMovieData={props.getMovieData}
        />
      );
    });
  };

  return (
    <section id="search_result">
      <h1>Search Result</h1>

      {/* Sjekke at return fra API har noen Fail */}
      {props.searchData.Response === "False" ? (
        <p>{props.searchData.Error}</p>
      ) : (
        ""
      )}

      {/* render Array funnet */}
      <div className="result_list_container">{renderMovieList()}</div>
    </section>
  );
}
