import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { apiSearchMovie } from "../store/IMDB";

export default function Main() {
  const dispatch = useDispatch();
  const results = useSelector(state =>  state.store.IMDB.results.Search || ["No Results Found"])
  console.log(results)

  const [imdb, setIMDB] = useState({
    input: "",
  });

  useEffect(() => {
    if (imdb.input.length) {
      dispatch(apiSearchMovie(imdb.input));
    }
  }, [imdb.input]);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setIMDB({
      ...imdb,
      [name]: value,
    });
  };

  return (
    <div>
      <Grid container>
        <input
          list="results"
          onChange={handleInput}
          name="input"
          value={imdb.input}
        />
        <datalist id="results">
            {results.length ? results.map(movie => <p>{movie.Title}</p>) : <p>No resutls</p>}
          
        </datalist>
      </Grid>
    </div>
  );
}
