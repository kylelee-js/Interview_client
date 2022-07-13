import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import kanban from "../components/Main/KanBanBoard/kanbanSlice";
import auth from "../components/Login/authSlice";

// TODO: rootReducer 생성하기? - 각지에 흩어져 있는 슬라이스.리듀서들을 한 파일에 넣을 이유?
// TODO: 리덕스 폴더 구조 생각하기 -> Ducks?
const rootReducer = combineReducers({
  kanban: kanban,
  auth: auth,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  // middleware도 추가 가능
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
