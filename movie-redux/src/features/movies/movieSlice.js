import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiInfo } from '../../config.js'
const apiKey = apiInfo.SECRET_KEY

const initialState = []

export const getMovie = createAsyncThunk(
  'movies/getMovie',
  async (title) => {
    try {
      const searchableTitle = title.join('-').toLowerCase()
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        }
      }

      const res = await fetch(
        `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${searchableTitle}&country=us`,
        options
      )
      const data = await res.json()
      console.log('>>>>', data)
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
  },
})

export default moviesSlice.reducer
