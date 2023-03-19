import { configureStore } from '@reduxjs/toolkit'

import movie from "./slice/movie"

export default configureStore({
  reducer: { 
    movie
   },
})