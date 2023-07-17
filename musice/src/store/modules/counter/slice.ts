/*
 * @Author: xiewenhao
 * @Date: 2023-07-12 17:30:47
 * @LastEditTime: 2023-07-17 14:46:18
 * @Description: 
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Direction from '@/contants/Directions'

interface IState {
  name: string
  message: string
  direction: Direction
  count: number
}

const initialState: IState = {
  name: '',
  message: '',
  direction: Direction.DEFAULT,
  count: 0
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
