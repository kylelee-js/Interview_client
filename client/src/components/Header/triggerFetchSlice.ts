import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const triggerFetchSlice = createSlice({
  name: "TRIGGER_FETCH_STATE",
  initialState: false,
  reducers: {
    onTrigger(state) {
      state = !state;
      return state;
    },
  },
});

export default triggerFetchSlice.reducer;
export const { onTrigger } = triggerFetchSlice.actions;
