import { configureStore } from "@reduxjs/toolkit";
import {
  authApiReducer,
  authApiMiddleware,
  authApiReducerPath,
} from "./slices/api/auth.slices.api";
import {
  productApiReducer,
  productApiMiddleware,
  productApiReducerPath,
} from "./slices/api/product.slices.api";
import {
  articleApiReducer,
  articleApiMiddleware,
  articleApiReducerPath,
} from "./slices/api/article.slices.api";
import {
  cartApiReducer,
  cartApiMiddleware,
  cartApiReducerPath,
} from "./slices/api/cart.slices.api";
import {
  userApiReducer,
  userApiMiddleware,
  userApiReducerPath,
} from "./slices/api/user.slices.api";
export const store = configureStore({
  reducer: {
    [authApiReducerPath]: authApiReducer,
    [productApiReducerPath]: productApiReducer,
    [articleApiReducerPath]: articleApiReducer,
    [cartApiReducerPath]: cartApiReducer,
    [userApiReducerPath]: userApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiMiddleware,
      productApiMiddleware,
      articleApiMiddleware,
      cartApiMiddleware,
      userApiMiddleware
    ),
});
