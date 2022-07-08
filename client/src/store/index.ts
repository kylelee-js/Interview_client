import { configureStore } from "@reduxjs/toolkit";
import kanban from "../components/Main/KanBanBoard/kanbanSlice";

// TODO: rootReducer 생성하기? - 각지에 흩어져 있는 슬라이스.리듀서들을 한 파일에 넣을 이유?
// TODO: 리덕스 폴더 구조 생각하기 -> Ducks?

const store = configureStore({
  reducer: {
    kanban,
  },
  // middleware도 추가 가능
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
