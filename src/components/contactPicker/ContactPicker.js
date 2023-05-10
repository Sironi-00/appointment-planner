import React from "react";

export const ContactPicker = (props) => {
  return (
    <>
      <label>
        Contact:
        <select
          onChange={({ target }) => props.handleChange(target.value)}
          value={props.value}
          name={props.name}
        >
          <option value="">No Contact Selected</option>
          {props.contacts.map((item, index) => {
            return (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
};
