import { configureStore } from "@reduxjs/toolkit";
import {
     authApiReducer,
     authApiMiddleware,
     authApiReducerPath,
} from './slices/api/auth.slices.api';
import {
     doctorApiReducer,
     doctorApiMiddleware,
     doctorApiReducerPath
} from './slices/api/doctor.slices.api';
import doctorReducer from './slices/docotor.slices';
export const store = configureStore({
     reducer: {
          doctor: doctorReducer,
          [authApiReducerPath]: authApiReducer,
          [doctorApiReducerPath]: doctorApiReducer
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
               .concat(authApiMiddleware)
               .concat(doctorApiMiddleware)
     ,
});