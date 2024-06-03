import { configureStore } from "@reduxjs/toolkit";
import works from "./features/works";

export const store = configureStore({
  reducer: {
    works,
  },
});

export type RootState = ReturnType<typeof store.getState>;
