import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
        required
      />
      <label>Phone:</label>
      <input
        type="tel"
        value={phone}
        onChange={({ target }) => setPhone(target.value)}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        required
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
