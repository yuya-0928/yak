import { createSlice } from "@reduxjs/toolkit";

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    isTaskListUpdateNeeded: false,
  },
  reducers: {
    tasksUpdateNeeded: (state) => {
      state.isTaskListUpdateNeeded = true;
    },
    tasksUpdateDone: (state) => {
      state.isTaskListUpdateNeeded = false;
    },
  }
});

export const { tasksUpdateNeeded, tasksUpdateDone } = taskListSlice.actions;
export default taskListSlice.reducer;