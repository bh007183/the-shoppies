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

        }
    }

})

export const {setVotes} = slice.action
export default slice.reducer

///////API Actions///////

export const apiSearchMovie = (data) => apiCallBegan({
    url: `http://localhost:8080/api/add`,
    method: "POST",
    data
})
