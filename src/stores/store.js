import { configureStore } from "@reduxjs/toolkit";
import {
     authApiReducer,
     authApiMiddleware,
     authApiReducerPath,
} from './slices/api/auth.slices.api'
export const store = configureStore({
     reducer: {
          [authApiReducerPath]: authApiReducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApiMiddleware),
});