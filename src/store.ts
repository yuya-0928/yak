import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./functions/taskListSlice";
import {useSelector as rawUseSelector, TypedUseSelectorHook} from 'react-redux';

export const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export default store