// const SERVER_URL = "http://localhost:8001/runs";
import { db } from "./Firebase";
import {
  query,
  collection,
  getDocs,
  orderBy,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const runsDB = collection(db, "runs");

export const getRuns = async () => {
  try {
    const res = await getDocs(query(runsDB, orderBy("date", "desc")));
    const result = res.docs.map((run) => ({
      ...run.data(),
      tempDate: run.data().date.toDate(),
      id: run.id,
    }));
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const newRun = async (run) => {
  try {
    const res = await addDoc(runsDB, run);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRun = async (id) => {
  try {
    const runDoc = doc(db, "runs", id);
   const resDelete =  await deleteDoc(runDoc);
    console.log(resDelete);
  } catch (error) {
    console.log(error);
  }
};
