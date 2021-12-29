import { configureStore, combineReducers } from '@reduxjs/toolkit'
import isAuthCreateSlice from './isAuth'

const rootReducer = combineReducers({
  auth:isAuthCreateSlice
})
export const store = configureStore({
  reducer: rootReducer
})