import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/authReducer'
import { contactReducer } from './reducers/contactReducer'

const rootReducer = () => ({
  auth: authReducer,
  contact: contactReducer,
  // router: connectRouter(history)
})

export const store = configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: rootReducer(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch