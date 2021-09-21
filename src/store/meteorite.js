import { createSlice } from "@reduxjs/toolkit";

export const meteoriteSlice = createSlice({
  name: "meteorite",
  initialState: {
    data: [],
  },
  reducers: {
    setMeteorites: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMeteorites } = meteoriteSlice.actions;

export default meteoriteSlice.reducer;

export const fetchMeteorites = (dispatch) => async () => {
  try {
    const res = await fetch("https://data.nasa.gov/resource/y77d-th95.json");
    const data = await res.json();
    dispatch(setMeteorites(data))
  } catch (e) {}
};
