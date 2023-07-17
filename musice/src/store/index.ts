/*
 * @Author: xiewenhao
 * @Date: 2023-07-11 10:51:26
 * @LastEditTime: 2023-07-17 14:48:28
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './modules/counter/slice'
import { pathSlice } from './modules/path/slice'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    path: pathSlice.reducer
  }
})

type GetStateFnType = typeof store.getState
type DispatchjType = typeof store.dispatch
type IRootState = ReturnType<GetStateFnType>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchjType = useDispatch
export const appShallowEqual = shallowEqual

export default store
