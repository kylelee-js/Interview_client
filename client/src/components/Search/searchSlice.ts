import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { onFetchSearchResult, SearchDataType } from "../../api/searchApi";
import { ApplicantDataType } from "../Applicant/applicantSlice";

export const fetchSearchData = createAsyncThunk(
  "FETCH_SEARCH_DATA",
  async (data: SearchDataType) => {
    const searchData = await onFetchSearchResult(data);
    return searchData;
  }
);

const initialData: ApplicantDataType[] = [];

const searchSlice = createSlice({
  name: "SEARCH_RESULT",
  initialState: initialData,
  reducers: {
    onToggleRemoveApplicantSearch(state, action) {
      const { applicantIndex, isFailed } = action.payload;
      state[applicantIndex].isFailed = !isFailed;
      state[applicantIndex].isFixed = !isFailed;
      return state;
    },
    onToggleFixApplicantSearch(state, action) {
      const { applicantIndex, isFixed } = action.payload;
      state[applicantIndex].isFixed = !isFixed;
      return state;
    },
    onTagWriteSearch(state, action) {
      const { applicantIndex, tagId, tagText } = action.payload;
      const targetApplicant = state[applicantIndex];
      if (targetApplicant.tags) {
        targetApplicant.tags?.push({ id: tagId, tagText: tagText });
        state[applicantIndex] = targetApplicant;
        return state;
      } else {
        targetApplicant.tags = [{ id: tagId, tagText: tagText }];
        state[applicantIndex] = targetApplicant;
        return state;
      }
    },
    onTagDeleteSearch(state, action) {
      const { applicantIndex, tagId } = action.payload;
      const targetApplicant = state[applicantIndex];
      const targetTagIndex = targetApplicant.tags?.findIndex(
        (tag) => tag.id == tagId
      );
      targetApplicant.tags?.splice(targetTagIndex!, 1);
      state[applicantIndex] = targetApplicant;
      return state;
    },
    onDateUpdateSearch(state, action) {
      const { applicantIndex, interviewDate } = action.payload;
      const targetApplicant = state[applicantIndex];
      targetApplicant.interviewDate = interviewDate;
      state[applicantIndex] = targetApplicant;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchData.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default searchSlice.reducer;
export const {
  onToggleRemoveApplicantSearch,
  onToggleFixApplicantSearch,
  onTagWriteSearch,
  onTagDeleteSearch,
  onDateUpdateSearch,
} = searchSlice.actions;
