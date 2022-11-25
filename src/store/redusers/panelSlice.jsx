import { createSlice } from "@reduxjs/toolkit";

const panelSlice = createSlice({
  name: 'panel',
  initialState:{
    isOpen: false
  },
  reducers:{
      openPanel(state, action){
        state.isOpen = true
      },
      closePanel(state, action){
        state.isOpen = false
      }
  }
})

export const panelActions = panelSlice.actions
export const panelReducer = panelSlice.reducer  