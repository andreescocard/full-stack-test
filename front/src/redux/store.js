import { configureStore } from '@reduxjs/toolkit'

import movieReducer from "./slice/movie"

export default configureStore({
  reducer: { 
    movieReducer
   },
})