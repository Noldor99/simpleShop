import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { panelReducer } from './redusers/panelSlice'
import { shopReducer } from './redusers/shopSlice'
 

export const store = configureStore({
  reducer: {
    shop : shopReducer,
    panel : panelReducer
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)

// export type RootState = ReturnType<typeof store.getState>