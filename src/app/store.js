import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../redux/slice/dataSlice'

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
  })

