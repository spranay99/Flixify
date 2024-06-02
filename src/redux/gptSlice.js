import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieResults: null,
    movieNames: null,
    gptSearchButton: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    setGptSearchButton: (state, action) => {
      state.gptSearchButton = true;
    },
  },
});

export const { toggleGPTSearchView, addGptMovieResult, setGptSearchButton } =
  gptSlice.actions;
export default gptSlice.reducer;
