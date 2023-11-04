import { useEffect, useState } from "react";
import TaskBlock from "./TaskBlock";
import getAllTasks from "../services/indexedDB/getAllTasks";
import { TaskType } from "../types/TaskType";
import { useSelector } from "../store";
import { useDispatch } from "react-redux";
import { tasksUpdateDone } from "../functions/taskListSlice";


const TaskList = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const isTaskListUpdateNeeded = useSelector((state) => state.taskList.isTaskListUpdateNeeded);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const allTasks = await getAllTasks();
        setTasks(allTasks);
      } catch (err) {
        console.error(err);
      }
    })();
    dispatch(tasksUpdateDone())
  }, [dispatch, isTaskListUpdateNeeded])

  useEffect(() => {
    console.log(tasks);
  }, [tasks])

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskBlock task={task} />
        </div>
      ))}
    </div>
  )
}

export default TaskList;