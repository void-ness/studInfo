import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",

  initialState: {
    name: "",
    age: 0,
    date: "",
    time: "",
  },

  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateDate: (state, action) => {
      state.date = action.payload.date;
      state.time = action.payload.time;
    },
  },
})

export const { updateName, updateAge, updateDate } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer
