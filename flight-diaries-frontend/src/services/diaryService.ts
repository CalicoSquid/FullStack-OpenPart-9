import axios from "axios";
import { DiaryEntry } from "../types";

const baseUrl = "http://localhost:3001/api";

const getAll = async () => {
  const  data  = axios.get<DiaryEntry[]>(`${baseUrl}/diaries`);
  return data;
};

const addEntry = async (data: DiaryEntry) => {
  const result = axios.post(`${baseUrl}/diaries`, data);
  return result;
};

export default {
  getAll,
  addEntry
};
