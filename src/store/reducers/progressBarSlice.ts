import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PauseBarState = {
  pause: boolean,
}

const initialState: PauseBarState = {
  pause: false,
}

export const barSlice = createSlice({
  name: 'progress-bar',
  initialState,
  reducers: {
    setPauseBar: function (state, action:PayloadAction<boolean>){
      state.pause = action.payload;
    },
  },
})

export const { setPauseBar } = barSlice.actions

export default barSlice.reducer