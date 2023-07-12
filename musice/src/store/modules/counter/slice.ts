import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  name: ''
}

export const counterSlice = createSlice({
  name: 'counter',
  reducers: {
    changeCounterAction: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  },
  initialState: initialState,
  extraReducers: {}
})
