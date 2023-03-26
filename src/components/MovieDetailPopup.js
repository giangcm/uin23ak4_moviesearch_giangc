import React from "react";

export default function MovieDetailPopup(props) {
    return (
      <section id="movie_detail" className={props.isShowPopup ? "" : "hidden"}>
        <div className="content">
          <h1 className="content_title">{props.movieDetail.Title || ""}</h1>
          <hr />
  
          <h3 className="content_director">
            Director : {props.movieDetail.Director || ""}
          </h3>
          <h3 className="content_genre">
            Genre : {props.movieDetail.Genre || ""}
          </h3>
          <h3 className="content_release">
            Release Date : {props.movieDetail.Released || ""}
          </h3>
          <h3 className="content_duration">
            Duration : {props.movieDetail.Runtime || ""}
          </h3>
          <h3 className="content_country">
            Country : {props.movieDetail.Country || ""}
          </h3>
          <h3 className="content_voted">
            Vote : {props.movieDetail.imdbRating} / 10
          </h3>
          <p className="content_description">
            {props.movieDetail.Plot ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque omnis sint nisi? Facere omnis consequuntur culpa ab accusantium maiores at quidem et sapiente tempora autem"}
          </p>
        </div>
  
        <div className="image">
          <img alt={props.movieDetail.Title} src={props.movieDetail.Poster}></img>
        </div>
  
        <button className="close_button" onClick={props.closeModal}>
          X
        </button>
      </section>
    );
  }
  