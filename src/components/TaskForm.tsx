import { tasksUpdateNeeded } from "../functions/taskListSlice";
import accessDB from "../services/indexedDB/accessDB";
import addTask from "../services/indexedDB/addTask";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const DBOpenRequest = accessDB();
    DBOpenRequest.onsuccess = () => {
      const taskName = formData.get("taskName");
      if (!taskName) {
        console.log("no task name")
        return;
      }
      addTask(DBOpenRequest, taskName);
      dispatch(tasksUpdateNeeded())
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="taskName" placeholder="Write a Task" />
      <button type="submit">Save Task</button>
    </form>
  )
};

export default TaskForm;