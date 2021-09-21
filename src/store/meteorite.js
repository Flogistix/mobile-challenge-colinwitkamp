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
  },
});

// Action creators are generated for each case reducer function
export const { setMeteorites } = meteoriteSlice.actions;

export default meteoriteSlice.reducer;

export const selectMeteorites = (value) => state => state.meteorite.data.filter(({
  name, id
}) => {

});

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
