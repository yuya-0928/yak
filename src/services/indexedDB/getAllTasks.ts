import { TaskType } from "../../types/TaskType";

const getAllTasks = () => {
  return new Promise<TaskType[]>((resolve, reject) => {
    const DBOpenRequest = window.indexedDB.open('yakDB');
    DBOpenRequest.onsuccess = () => {
      const db = DBOpenRequest.result;
      const transaction = db.transaction('tasks', 'readonly');
      const objectStoreRequest = transaction.objectStore('tasks').getAll();
      objectStoreRequest.onsuccess = () => {
        resolve(objectStoreRequest.result);
      }

      objectStoreRequest.onerror = (err) => {
        reject(err);
      }
    }

    DBOpenRequest.onerror = (err) => {
      reject(err);
    }
  })
};

export default getAllTasks;