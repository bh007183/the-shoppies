import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { apiSearchMovie } from "../store/IMDB";
import Cards from "../components/Cards";
import NominationCards from "../components/NominationCards";
import { apiGetNominatedMovie } from "../store/shoppies";
import { apiNominateMovie } from "../store/shoppies";

export default function Main() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.store.IMDB.results.Search) || [
    -1,
  ];
  const nominationResults = useSelector((state) => state.store.shoppies.Votes) || [
    -1,
  ];
  const imdbIdArray = useSelector((state) => state.store.shoppies.imdbID) 

  console.log(results);

  const [imdb, setIMDB] = useState({
    input: "",
  });

  useEffect(() => {
    dispatch(apiSearchMovie(imdb.input));
    
  }, [imdb.input, dispatch]);

  useEffect(() => {
    dispatch(apiGetNominatedMovie())
    
  }, []);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setIMDB({
      ...imdb,
      [name]: value,
    });
  };

  const onVote = (event) => {
    let index = event.target.attributes.data.value;
    dispatch(apiNominateMovie(results[index]));
  };

  return (
    <div>
      <Grid container>
        <Grid direction="row" container>
          <Grid item xs={12} md={4}>
            <form className="SearchBar">
              <input
                placeholder="Search By Title"
                list="results"
                onChange={handleInput}
                name="input"
                value={imdb.input}
              />
            </form>
          </Grid>
          <Grid item xs={12} md={8}></Grid>
        </Grid>
        <Grid container direction="row">
          {/* Search Results Diplayed Here */}
          <Grid item xs={12} md={4}>
            {results[0] !== -1 ? (
              results.map((movie, index) => (
                imdbIdArray.indexOf(movie.imdbID) !== -1 ? 

                <Cards
                  data={index}
                  key={index}
                  selected={true}
                  poster={
                    movie.Poster === "N/A"
                      ? "https://st3.depositphotos.com/1322515/35964/v/1600/depositphotos_359648638-stock-illustration-image-available-icon.jpg"
                      : movie.Poster
                  }
                  title={movie.Title}
                  year={movie.Year}
                  onVote={onVote}
                /> : 
                <Cards
                  data={index}
                  key={index}
                  selected={false}
                  poster={
                    movie.Poster === "N/A"
                      ? "https://st3.depositphotos.com/1322515/35964/v/1600/depositphotos_359648638-stock-illustration-image-available-icon.jpg"
                      : movie.Poster
                  }
                  title={movie.Title}
                  year={movie.Year}
                  onVote={onVote}
                /> 
              ))
            ) : (
              <p>No Results</p>
            )}
          </Grid>
          <Grid item md={4}></Grid>
          <Grid item xs={12} md={4}>
            {/* Nominations Display here */}
            <h5 className="YourNominations">Your Nominations</h5>
          {nominationResults[0] !== -1 ? (
              nominationResults.map((movie, index) => (
                <NominationCards
                  data={index}
                  key={index}
                  poster={
                    movie.Poster === "N/A"
                      ? "https://st3.depositphotos.com/1322515/35964/v/1600/depositphotos_359648638-stock-illustration-image-available-icon.jpg"
                      : movie.Poster
                  }
                  title={movie.Title}
                  year={movie.Year}
                  onVote={onVote}
                />
              ))
            ) : (
              <p>No Nominations</p>
            )}



          </Grid>
          
          
          
        </Grid>
      </Grid>
    </div>
  );
}
