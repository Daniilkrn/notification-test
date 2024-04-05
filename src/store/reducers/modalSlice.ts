import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type BarState = {
  open: boolean,
}

const initialState: BarState = {
  open: false,
}

export const modalSlice = createSlice({
  name: 'modal-notification',
  initialState,
  reducers: {
    setModal: function (state, action:PayloadAction<boolean>) {
      state.open = action.payload;
    },
  },
})

export const { setModal } = modalSlice.actions

export default modalSlice.reducer