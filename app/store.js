import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../silces/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
