import { createSlice } from '@reduxjs/toolkit'

const isAuthCreateSlice = createSlice({
  name:'isAuth',
  initialState: {
    isAuth: false,
    userInfo: []
  },
  reducers: {
    logInGoogle(state){
      state.isAuth =true
    },
    logoutGoogle(state){
      state.isAuth = false
    },
    getUsers (state, action){
      state.userInfo = action.payload
    }
  }
})

export default isAuthCreateSlice.reducer
export const {logInGoogle, logoutGoogle, getUsers} = isAuthCreateSlice.actions