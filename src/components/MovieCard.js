import React from "react";


export default function MovieCard(props){
    return(
        <div onClick={() => {
            props.getMovieData(props.movie);
      }}
      className="result_item_poster"
    >
      <div
        className="image_info"
        style={{
          backgroundImage: `url(${
            props.movie.Poster === "N/A"
              ? "./assets/no_image.jpg"
              : props.movie.Poster
          })`,
        }}
      ></div>

      <h1 className="title_info">{props.movie.Title}</h1>

      <button
        onClick={() => {
          props.getMovieData(props.movie);
        }}
        className="btn_info"
      >
        Movie Info
      </button>
    </div>
    );
    }
    
