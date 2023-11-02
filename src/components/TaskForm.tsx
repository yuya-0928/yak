import addTask from "../services/indexedDB/addTask";
import createDB from "../services/indexedDB/createDB";

const TaskForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const dbName = "yakDB";
    const dbRequest = indexedDB.open(dbName);

    dbRequest.onerror = (event) => {
      console.error("error");
      console.error(`Database error: ${JSON.stringify(event)}}`)
    }
    
    dbRequest.onupgradeneeded = () => {
      createDB(dbRequest);
    }

    dbRequest.onsuccess = () => {
      const taskName = formData.get("taskName");
      if (!taskName) {
        console.log("no task name")
        return;
      }
      addTask(dbRequest, taskName);
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