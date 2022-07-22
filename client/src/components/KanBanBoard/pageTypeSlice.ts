import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PageType = {
  type: string;
};

const pageType: PageType = {
  type: "",
};

const pageTypeSlice = createSlice({
  name: "PAGE_TYPE",
  initialState: pageType,
  reducers: {
    onSetPage(state, action) {
      state.type = action.payload;
      return state;
    },
  },
});

export default pageTypeSlice.reducer;
export const { onSetPage } = pageTypeSlice.actions;
