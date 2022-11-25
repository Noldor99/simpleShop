import { createSlice } from "@reduxjs/toolkit";
import items from '../../data/items.json'
const shopSlice = createSlice({
  name: 'shop',
  initialState:{
    cards:items,
    totalQuantity: 0
  },
  reducers:{
      initCard(state, {payload}){
        state.product = payload
      },
      increaseCard(state, {payload}){
        const cartItem = state.cards.find(item=>item.id === payload)
        cartItem.quantity = cartItem.quantity + 1
      },
      decreaseCard(state, {payload}){
        const cartItem = state.cards.find(item=>item.id === payload)
        cartItem.quantity = cartItem.quantity - 1
      },
      quantityCard(state, {payload}){
        state.totalQuantity = state.cards.reduce((quantityAll, item)=>item.quantity + quantityAll, 0)
      },
      removeCard(state, {payload}){
        state.cards = state.cards.filter(item=>item.id !== payload)
      },
      removeFromShop(state, {payload}){
        const cartItem = state.cards.find(item=>item.id === payload)
        cartItem.quantity = 0
      },

  }
})

export const shopActions = shopSlice.actions
export const shopReducer = shopSlice.reducer  