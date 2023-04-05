import { combineReducers } from "redux";

import todoReducer from "@/store/todo/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
