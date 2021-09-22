import { createSlice } from "@reduxjs/toolkit";
import AS from "@react-native-async-storage/async-storage";

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
      console.info("setMeteorLike", action);
      const { id, like } = action.payload;
      state.likes[id] = like;
      AS.setItem("likes", JSON.stringify(state.likes));
    },
    setMeteorLikes: (state, action) => {
      state.likes = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setMeteorites, filterMeteorites, setMeteorLike, setMeteorLikes } =
  meteoriteSlice.actions;

export default meteoriteSlice.reducer;

export const selectMeteorites = (state) => state.meteorite.filtered;
export const selectMeteoritesLikes = (state) => state.meteorite.likes;

export const fetchMeteorites = () => async (dispatch) => {
  try {
    // Load from storage first
    let data = [];
    try {
      const strData = await AS.getItem("meteorites");
      data = JSON.parse(strData);
      if (Array.isArray(data)) {
        dispatch(setMeteorites(data));
      }
      
      const strLikes = await AS.getItem("likes");
      likes = JSON.parse(strLikes)
      if (likes) {
        dispatch(setMeteorLikes(likes));
      }
    } catch (e) {}
    const res = await fetch("https://data.nasa.gov/resource/y77d-th95.json");
    data = await res.json();
    console.info("Meteorites fetched:", data);
    dispatch(setMeteorites(data));
    AS.setItem("meteorites", JSON.stringify(data));
  } catch (e) {
    console.error("fetchMeteorites - ", e);
  }
};
