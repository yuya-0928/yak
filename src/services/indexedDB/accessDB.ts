import createDB from "./createDB";

const accessDB = () => {
  const DBOpenRequest = window.indexedDB.open('yakDB');
  DBOpenRequest.onupgradeneeded = () => {
    const db = DBOpenRequest.result;

    db.onerror = (err) => {
      console.error('Error loading database.', err);
    }
    createDB(DBOpenRequest);
  }

  return DBOpenRequest;
}

export default accessDB;