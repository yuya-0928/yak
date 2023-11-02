import { useEffect, useState } from "react";
import TaskBlock from "./TaskBlock";
import getAllTasks from "../services/indexedDB/getAllTasks";
import { TaskType } from "../types/TaskType";

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const allTasks = await getAllTasks();
        setTasks(allTasks);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [])

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