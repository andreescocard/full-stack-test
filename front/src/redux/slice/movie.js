import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createAsyncThunk - A function that accepts a Redux action type string and a callback function that should return a promise. It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
//Action
export const fetchMovies = createAsyncThunk("fetchMovies", async (movieName) => {
    const response = await fetch("http://localhost:3000/movie/"+movieName);
    return response.json();
})

//createSlice - A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
           console.log("Error", action.payload);
           state.isError = true;
        })
    }
})

export default movieSlice.reducer;