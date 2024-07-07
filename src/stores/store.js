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
import { uploadApiReducer, uploadApiReducerPath, uploadApiMiddleware } from "./slices/api/upload.slices.api";
export const store = configureStore({
     reducer: {
          doctor: doctorReducer,
          [authApiReducerPath]: authApiReducer,
          [doctorApiReducerPath]: doctorApiReducer,
          [uploadApiReducerPath]: uploadApiReducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
               .concat(authApiMiddleware)
               .concat(doctorApiMiddleware)
               .concat(uploadApiMiddleware)
     ,
});