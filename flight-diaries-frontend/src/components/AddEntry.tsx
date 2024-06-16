import axios from "axios";
import diaryService from "../services/diaryService";
import { useState } from "react";
import { DiaryEntry } from "../types";

interface AddProps {
  closeModal: () => void;
  showError: (error: string) => void;
}

const AddEntry = ({ closeModal, showError }: AddProps) => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [visibility, setVisibility] = useState("");
  const [comment, setComment] = useState("");

  const handleAddEntry = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!weather || !visibility) {
      showError("Please select both weather and visibility.");
      return;
    }
    const entry: DiaryEntry = {
      id: 0,
      date,
      weather,
      visibility,
      comment,
    };
    try {
      await diaryService.addEntry(entry);
      closeModal();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showError(error.response?.data?.error || "An error occurred");
      } else {
        showError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="add-entry-container">
      <h1>Add Diary Entry</h1>
      <form className="add-entry-form" onSubmit={handleAddEntry}>
        <label>
          <b>Date:</b>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label>
        <hr/>
        <fieldset className="weather">
          <legend>Weather:</legend>
          <label>
            <input
              type="radio"
              name="weather"
              value="sunny"
              checked={weather === "sunny"}
              onChange={(event) => setWeather(event.target.value)}
              required
            />
            Sunny
          </label>
          <label>
            <input
              type="radio"
              name="weather"
              value="rainy"
              checked={weather === "rainy"}
              onChange={(event) => setWeather(event.target.value)}
              required
            />
            Rainy
          </label>
          <label>
            <input
              type="radio"
              name="weather"
              value="cloudy"
              checked={weather === "cloudy"}
              onChange={(event) => setWeather(event.target.value)}
              required
            />
            Cloudy
          </label>
          <label>
            <input
              type="radio"
              name="weather"
              value="windy"
              checked={weather === "windy"}
              onChange={(event) => setWeather(event.target.value)}
              required
            />
            Windy
          </label>
          <label>
            <input
              type="radio"
              name="weather"
              value="stormy"
              checked={weather === "stormy"}
              onChange={(event) => setWeather(event.target.value)}
              required
            />
            Stormy
          </label>
          <label>
            <input
              type="radio"
              name="weather"
              value="sunny"
              checked={weather === "sunny"}
              onChange={(event) => setWeather(event.target.value)}
              required
            />
            Sunny
          </label>
        </fieldset>
        <hr/>
        <fieldset className="visibility">
          <legend>Visibility:</legend>
          <label>
            <input
              type="radio"
              name="visibility"
              value="great"
              checked={visibility === "great"}
              onChange={(event) => setVisibility(event.target.value)}
              required
            />
            Great
          </label>
          <label>
            <input
              type="radio"
              name="visibility"
              value="good"
              checked={visibility === "good"}
              onChange={(event) => setVisibility(event.target.value)}
              required
            />
            Good
          </label>
          <label>
            <input
              type="radio"
              name="visibility"
              value="ok"
              checked={visibility === "ok"}
              onChange={(event) => setVisibility(event.target.value)}
              required
            />
            Ok
          </label>
          <label>
            <input
              type="radio"
              name="visibility"
              value="poor"
              checked={visibility === "poor"}
              onChange={(event) => setVisibility(event.target.value)}
              required
            />
            Poor
          </label>
        </fieldset>
        <hr/>
        <label>
          Comment:
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEntry;
