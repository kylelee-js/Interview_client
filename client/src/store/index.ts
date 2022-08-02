import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // defaults to sessionStorage for web
// 각 슬라이스의 리듀서들
import kanban from "../components/KanBanBoard/kanbanSlice";
import auth from "../components/Login/authSlice";
import review from "../components/Applicant/reviewSlice";
import applicant from "../components/Applicant/applicantSlice";
import { queryApi } from "../api/queryApi";
import pageType from "../components/KanBanBoard/pageTypeSlice";
import pool from "../components/Pool/poolSlice";
import triggerFetch from "../components/Header/triggerFetchSlice";
import search from "../components/Search/searchSlice";

// 루트리듀서 - 모든 리듀서 하나로
const rootReducer = combineReducers({
  [queryApi.reducerPath]: queryApi.reducer,
  pageType: pageType,
  kanban: kanban,
  auth: auth,
  review: review,
  applicant: applicant,
  pool: pool,
  triggerFetch: triggerFetch,
  search: search,
});

// 로컬스토리지 저장 - redux-persist
const persistConfig = {
  key: "root",
  storage,
  // auth 상태만 저장
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 스토어
const store = configureStore({
  reducer: persistedReducer,
  // middlewart: []  // 그때 미들웨어에서 문제가 있어서 -> redux-persist 문제
  middleware: (gDM) => gDM().concat(queryApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
