//slice is a collection of redux reducer and actions in a single file for a feature

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createAsyncThunk - A function that accepts a Redux action type string and a callback function that should return a promise. It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise.

//Actions
export const fetchMovies = createAsyncThunk("fetchMovies", async (movieName) => {
    const response = await fetch("http://localhost:3000/movie/"+movieName);
    return response.json();
})

export const getFavs = createAsyncThunk("getFavs", async () => {
    const response = await fetch("http://localhost:3000/favs/");
    return response.json();
})
export const favOrUnfavMovie = createAsyncThunk("favOrUnfavMovie", async (imdbID) => {
    const response = await fetch("http://localhost:3000/favunfav/"+imdbID);
    return response.json();
})

export const getRatings = createAsyncThunk("getRatings", async () => {
    const response = await fetch("http://localhost:3000/ratings/");
    return response.json();
})
export const setRatingMovie = createAsyncThunk("setRatingMovie", async (data,state) => {
    const response = await fetch("http://localhost:3000/rating/"+data.rate+"/"+data.imdbID);
    //console.log(data)
    return response.json();
})


export const clearMovies = createAsyncThunk("clearMovies", async () => {
    return null;
})

//createSlice - A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    /*The reducers property both creates an action creator function and responds to that action in the slice reducer. The extraReducers allows you to respond to an action in your slice reducer but does not create an action creator function.
    
        You will use reducers most of the time.

    You would use extraReducers when you are dealing with an action that you have already defined somewhere else. The most common examples are responding to a createAsyncThunk action and responding to an action from another slice.*/
    extraReducers: (builder) => {
        //fetchMovies
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

        //getFavs
        builder.addCase(getFavs.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getFavs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dataFavs = action.payload;
        })
        builder.addCase(getFavs.rejected, (state, action) => {
           console.log("Error", action.payload);
           state.isError = true;
        })

        //getRatings
        builder.addCase(getRatings.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getRatings.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dataRatings = action.payload;
        })
        builder.addCase(getRatings.rejected, (state, action) => {
           console.log("Error", action.payload);
           state.isError = true;
        })

        //setRating
        builder.addCase(setRatingMovie.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(setRatingMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dataRatings = action.payload;
        })
        builder.addCase(setRatingMovie.rejected, (state, action) => {
           console.log("Error", action.payload);
           state.isError = true;
        })

        //favOrUnfavMovie
        builder.addCase(favOrUnfavMovie.pending, (state, action) => {
        })
        builder.addCase(favOrUnfavMovie.fulfilled, (state, action) => {
            state.dataFavs = action.payload;
        })
        builder.addCase(favOrUnfavMovie.rejected, (state, action) => {
           console.log("Error", action.payload);
           state.isError = true;
        })

        //clearMovies
        builder.addCase(clearMovies.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(clearMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(clearMovies.rejected, (state, action) => {
           console.log("Error", action.payload);
           state.isError = true;
        })
    }
})

export default movieSlice.reducer;