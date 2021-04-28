import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActionCreators"

const slice = createSlice({
    name: "IMDB",
    initialState: {
        results: [],
        featured: [],
        
    },
    reducers:{
        setMovie: (IMDB, action) => {
            IMDB.results = action.payload

        },
        setFeatured: (IMDB, action) => {
            IMDB.featured = action.payload

        }
        
    }

})

export const {setMovie, setFeatured} = slice.actions
export default slice.reducer

///////API Actions///////

export const apiSearchMovie = (searchInput) => apiCallBegan({
    url: `https://www.omdbapi.com/?apikey=2a189c45&s=${searchInput}`,
    method: "GET",
    onSuccess: setMovie.type
})

export const featuredMovie = () => apiCallBegan({
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`,
    onSuccess: setFeatured.type
    
})
