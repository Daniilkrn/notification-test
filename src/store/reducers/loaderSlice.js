import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: function (state, action) {
      state.active = action.payload;
    },
  },
})

export const { setLoader } = loaderSlice.actions

export default loaderSlice.reducer