import { createSlice } from '@reduxjs/toolkit'

export const meteoriteSlice = createSlice({
  name: 'meteorite',
  initialState: {
    data: [],
  },
  reducers: {
    setMeteorites: (state, action) => {
      state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMeteorites } = meteoriteSlice.actions

export default meteoriteSlice.reducer
