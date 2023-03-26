import Axios from "axios";
import React, { useEffect, useState } from "react";
import MovieDetailPopup from "../components/MovieDetailPopup/MovieDetailPopup";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResult from "../components/SearchResult/SearchResult";


export default function SearchPage() {
  const [searchData, setSearchData] = useState("");
  const [movieDetail, setMovieDetail] = useState("");
  const [isShowPopup, setIsShowPopup] = useState(false);

  useEffect(() => {
    callApiInitialMovie();
  }, []);

  // funtion call api trekker 10 fillmen av Jame Bonds
  const callApiInitialMovie = () => {
    const promise = Axios({
      method: "GET",
      url: "https://www.omdbapi.com/?apikey=f7402ede&s=James+Bond&type=movie",
    });

    promise
      .then((res) => {
        setSearchData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // funtion trekker key word fra form input og call api
  const getSearchKeyWord = (data) => {
    const promise = Axios({
      method: "GET",
      url: `https://www.omdbapi.com/?apikey=f7402ede&s=${data}&type=movie`,
    });
    promise
      .then((res) => {
        if (res.data.totalResults == "1") {
          getMovieData(res.data.Search[0]);
          // return;
        }
        setSearchData(res.data);
      })
      .catch((error) => {
        console.log("Search error", error);
      });
  };

  // funtion behandle informasjon når klikker på hver filmen
  const getMovieData = (data) => {
    if (data.imdbID === movieDetail.imdbID) {
      setIsShowPopup(false);
      setMovieDetail("");
      return;
    }
    const promise = Axios({
      method: "GET",
      url: `https://www.omdbapi.com/?apikey=f7402ede&i=${data.imdbID}&type=movie`,
    });
    promise
      .then((res) => {
        setMovieDetail(res.data);
        setIsShowPopup(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // funtion loser modal movie detail
  const closeModal = () => {
    setIsShowPopup((prevState) => !prevState);
    setMovieDetail("");
  };

  return (
    <main id="search">
      <SearchForm getSearchKeyWord={getSearchKeyWord} />
      <SearchResult searchData={searchData} getMovieData={getMovieData} />
      <MovieDetailPopup
        isShowPopup={isShowPopup}
        movieDetail={movieDetail}
        closeModal={closeModal}
      />
    </main>
  );
}
