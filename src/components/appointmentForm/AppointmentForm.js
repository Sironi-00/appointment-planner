import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
        
        <input
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          required
        />
        </label>
        <label>
          Date:
        <input
          type="date"
          value={date}
          onChange={({ target }) => setDate(target.value)}
          min={getTodayString()}
          required
        />
        </label>
        <label>
          Time:
        <input
          type="time"
          value={time}
          onChange={({ target }) => setTime(target.value)}
        />
        </label>
        <ContactPicker contacts={contacts} name={contact} value={contact} handleChange={setContact} />
        <input type="submit" value='Create Appointment'/>
      </form>
    </>
  );
};
