import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiInfo } from '../../config.js'

const apiKey = apiInfo.SECRET_KEY
const initialState = {
  result: null
}

export const getMovie = createAsyncThunk(
  'movies/getMovie',
  async (title) => {
    try {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        }
      }

      const res = await fetch(
        `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${title}&country=us`,
        options
      )
      const data = await res.json()
      return data
    } catch (err) {
      return err.message
    }
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovieToList: (state, action) => {
      state.movies.result = action.payload
    }
  },
})

export const selectMovie = (state) => state.movies.result
export const { addMovieToList } = moviesSlice.actions
export default moviesSlice.reducer
