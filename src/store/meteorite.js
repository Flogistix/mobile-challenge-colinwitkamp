import { createSlice } from "@reduxjs/toolkit";

export const meteoriteSlice = createSlice({
  name: "meteorite",
  initialState: {
    data: [],
    filtered: []
  },
  reducers: {
    setMeteorites: (state, action) => {
      state.data = action.payload;
      state.filtered = action.payload;
    },
    filterMeteorites: (state, action) => {
      const keyword = action.payload;
      state.filtered = state.data.filter(({ name, id}) => {
        return id.toLowercase().indexOf(keyword) > - 1 || name.toLowercase().indexOf(keyword)
      })
    }
  },
});

// Action creators are generated for each case reducer function
export const { setMeteorites, filterMeteorites } = meteoriteSlice.actions;

export default meteoriteSlice.reducer;

export const selectMeteorites = state => state.meteorite.filtered;

export const fetchMeteorites = () => async (dispatch) => {
  try {
    const res = await fetch("https://data.nasa.gov/resource/y77d-th95.json");
    const data = await res.json();
    console.info('Meteorites fetched:', data)
    dispatch(setMeteorites(data))
  } catch (e) {
    console.error('fetchMeteorites - ', e)
  }
};
