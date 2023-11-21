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
          width: "300px",
          height: "35px",
          border: "1px solid #ccc",
          borderRadius: "15px",
          margin: "10px",
          padding: "10px",
        }}
        placeholder="Enter your message..."
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-lg"
      >
        Send
      </button>
    </form>
  );
};

export default InputForm;
