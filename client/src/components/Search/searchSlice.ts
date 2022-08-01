import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchResult, SearchDataType } from "../../api/searchApi";
import { ApplicantDataType } from "../Applicant/applicantSlice";

export const fetchSearchData = createAsyncThunk(
  "FETCH_SEARCH_DATA",
  async (data: SearchDataType) => {
    const searchData = await fetchSearchResult(data);
    return searchData;
  }
);

const initialData: ApplicantDataType[] = [];

const searchSlice = createSlice({
  name: "SEARCH_RESULT",
  initialState: initialData,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchData.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default searchSlice.reducer;
export const {} = searchSlice.actions;
