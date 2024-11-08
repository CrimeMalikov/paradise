import { modalsSlice } from "./slices/modalsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/UserApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    modalsReducer: modalsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
