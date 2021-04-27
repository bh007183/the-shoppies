import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActionCreators"

const slice = createSlice({
    name: "Shoppies",
    initialState: {
        Votes: []
    },
    reducers:{
        setVotes: (Shoppies, action) => {
            Shoppies.Votes.push(action.payload)

        },
        initialSetVotes: (Shoppies, action) => {
            Shoppies.Votes = action.payload 

        }
    }

})

export const {setVotes, initialSetVotes} = slice.actions
export default slice.reducer

///////API Actions///////

export const apiNominateMovie = (data) => apiCallBegan({
    url: `http://localhost:3001/api/add`,
    method: "POST",
    data,
    onSuccess: setVotes.type
})
export const apiGetNominatedMovie = () => apiCallBegan({
    url: `http://localhost:3001/api/get`,
    method: "GET",
    onSuccess: initialSetVotes.type
})
