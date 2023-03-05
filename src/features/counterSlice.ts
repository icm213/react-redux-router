import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  users: string[];
}

const initialState: CounterState = {
  count: 0,
  users: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
    addUser(state, action: PayloadAction<string>) {
      state.users.push(action.payload);
    },
  },
});

export const { increment, decrement, reset, addUser } = counterSlice.actions;
export default counterSlice.reducer;
