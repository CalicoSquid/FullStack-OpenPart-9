import { useEffect, useState } from "react";
import "./App.css";
import diaryService from "./services/diaryService";
import { DiaryEntry } from "./types";
import Entries from "./components/Entries";
import Modal from "./components/Modal";

function App() {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await diaryService.getAll();
      setDiaryEntries(data);
    };
    fetchData();
  }, [diaryEntries]);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);
  const showError = (error: string): void => {
    setError(error);
    setTimeout(() => setError(null), 5000);
  };

  return (
    <div className="App">
      <h1>Ilari's Flight Diary</h1>
      <Entries diaryEntries={diaryEntries} openModal={openModal} />
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        error={error}
        showError={showError}
      />
    </div>
  );
}

export default App;
