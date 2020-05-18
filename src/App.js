import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import ImgList from "./components/ImgList";

export default function App() {
  const endPoint = "https://rickandmortyapi.com/api/character/";
  const [imgs, changeImgs] = useState([]);
  const [loadingState, loading] = useState(true);
  const [imageState, imgState] = useState(true);

  useEffect(() => {
    performSearch();
    //console.log(imgs);
  }, []);

  const performSearch = (query = "morty") => {
    axios
      .get(`${endPoint}?name=${query}`)
      .then(data => {
        //console.log(data.data.results);
        changeImgs(data.data.results);
        imgState(true);
        loading(false);
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
        //alert("noImage");
        imgState(false);
      });
  };

  return (
    <div className="App">
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">RickAndMortyImageSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {imageState ? (
          loadingState ? (
            <p>loading...</p>
          ) : (
            <ImgList data={imgs} />
          )
        ) : (
          <div>
            <h2>noImage...</h2>
            <h3>No Images match your search.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
