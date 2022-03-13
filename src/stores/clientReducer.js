import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    value: [],
  },
  reducers: {
    addClient: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeClient: (state, action) => {
      state.value = state.value.filter((item, index) => {
        return action.payload !== index;
      });
    },
    setClient: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addClient, removeClient, setClient } = clientSlice.actions;
export default clientSlice.reducer;
