import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActionCreators"

const slice = createSlice({
    name: "IMDB",
    initialState: {
        results: []
    },
    reducers:{
        setMovie: (IMDB, action) => {
            IMDB.results = action.payload

        }
    }

})

export const {setMovie} = slice.actions
export default slice.reducer

///////API Actions///////

export const apiSearchMovie = (searchInput) => apiCallBegan({
    url: `https://www.omdbapi.com/?apikey=2a189c45&s=${searchInput}`,
    method: "GET",
    onSuccess: setMovie.type
})
