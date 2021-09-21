import { createSlice } from "@reduxjs/toolkit";

export const meteoriteSlice = createSlice({
  name: "meteorite",
  initialState: {
    data: [],
    filtered: [],
    likes: {}, // id: bool
  },
  reducers: {
    setMeteorites: (state, action) => {
      state.data = action.payload;
      state.filtered = action.payload;
    },
    filterMeteorites: (state, action) => {
      console.info("filterMeteorites - ", action);
      const keyword = action.payload.toLowerCase();
      state.filtered = state.data.filter(({ name, id }) => {
        return (
          id.toLowerCase().indexOf(keyword) > -1 ||
          name.toLowerCase().indexOf(keyword) > -1
        );
      });
    },
    setMeteorLike: (state, action) => {
      console.info('setMeteorLike', action)
      const { id, like } = action.payload;
      state.likes[id] = like;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMeteorites, filterMeteorites, setMeteorLike } = meteoriteSlice.actions;

export default meteoriteSlice.reducer;

export const selectMeteorites = (state) => state.meteorite.filtered;
export const selectMeteoritesLikes = (state) => state.meteorite.likes;

export const fetchMeteorites = () => async (dispatch) => {
  try {
    const res = await fetch("https://data.nasa.gov/resource/y77d-th95.json");
    const data = await res.json();
    console.info("Meteorites fetched:", data);
    dispatch(setMeteorites(data));
  } catch (e) {
    console.error("fetchMeteorites - ", e);
  }
};
