import React from "react";

const InputForm = ({ text, handleChange, sendMessage }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <form
      style={{ marginTop: '30px' }}
      className="text-center"
      onSubmit={sendMessage}
    >
      <input
        style={{
          height: "35px",
          border: "1px solid #ccc",
          borderRadius: "20px",
          margin: "10px",
          padding: "10px",
        }}
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button
        style={{
          height: "35px",
          margin: "10px",
          padding: "10px",
          alignContent: "center",
        }}
        type="submit"
      >
        &rarr;
      </button>
    </form>
  );
};

export default InputForm;
