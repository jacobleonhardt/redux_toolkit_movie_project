import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const key = apiInfo.SECRET_KEY

const initialState = []

export const getMovie = createAsyncThunk(
  'movies/getMovie',
  async (title) => {
    try {
      const searchableTitle = title.join('-').toLowerCase()
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'faf9a363d8msh79ae6e76c4d6dd6p1bfc70jsne9bd63f7b954',
          'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        }
      }

      const res = await fetch(
        `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${searchableTitle}&country=us`,
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
  reducers: {},
})

export default moviesSlice.reducer