import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActionCreators"

const slice = createSlice({
    name: "Shoppies",
    initialState: {
        Votes: [],
        imdbID: []
    },
    reducers:{
        setVotes: (Shoppies, action) => {
            Shoppies.Votes.push(action.payload);
            Shoppies.imdbID.push(action.payload.imdbID)


        },
        initialSetVotes: (Shoppies, action) => {
            Shoppies.Votes = action.payload 
            let replaceArr = []
            for(let i = 0; i < action.payload.length; i++){
                replaceArr.push(action.payload[i].imdbID)
            }
            Shoppies.imdbID = replaceArr

        }
    

    }

})

export const {setVotes, initialSetVotes } = slice.actions
export default slice.reducer

///////API Actions///////

export const apiNominateMovie = (data) => apiCallBegan({
    url: `https://bjh-shopify-intern.herokuapp.com/api/add`,
    method: "POST",
    data,
    onSuccess: setVotes.type
})
export const apiGetNominatedMovie = () => apiCallBegan({
    url: `https://bjh-shopify-intern.herokuapp.com/api/get`,
    method: "GET",
    onSuccess: initialSetVotes.type
})
export const apiDeleteNominatedMovie = (_id) => apiCallBegan({
    url: `https://bjh-shopify-intern.herokuapp.com/api/delete/${_id}`,
    method: "Delete",
    
    
})
