import { DiaryEntry } from "../types";
import EntryButton from "./EntryButton";

interface EntryProps {
    diaryEntries: DiaryEntry[]
    openModal: () => void
}

export default function Entries({ diaryEntries, openModal }: EntryProps) {
  return (
    <div>
        {diaryEntries.map((entry, index) => (
          <div key={index} className="entry">
            <h3>{`Entry ${index + 1}`}</h3>
            <ul>
              <li className="entry-date">{entry.date}</li>
              <li className="entry-weather">Weather: {entry.weather}</li>
              <li className="entry-visibility">Visibility: {entry.visibility}</li>
              <li className="entry-comment">Comment: <i>"{entry.comment}"</i></li>
            </ul>
          </div>
        ))}
        <EntryButton openModal={openModal}/>
      </div>
  );
}
