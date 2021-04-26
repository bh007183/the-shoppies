import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActionCreators"

const slice = createSlice({
    name: "IMDB",
    initialState: {
        searchVal: "",
        results: []
    },
    reducers:{
        setMovie: (IMDB, action) => {
            IMDB.results = action.payload

        }
    }

})

export const {setMovie} = slice.action
export default slice.reducer

///////API Actions///////

export const apiSearchMovie = (searchInput) => apiCallBegan({
    url: `https://www.omdbapi.com/?apikey=2a189c45&t=${searchInput}`,
    method: "GET",
    onSuccess: setMovie.type
})
