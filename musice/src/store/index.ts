/*
 * @Author: xiewenhao
 * @Date: 2023-07-11 10:51:26
 * @LastEditTime: 2023-07-11 16:36:26
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './modules/counter/slice'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
