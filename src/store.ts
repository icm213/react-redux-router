import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from "./features/counterSlice";

export const store = configureStore({
  reducer: counterReducer,
});

export type RootState = CounterState;
