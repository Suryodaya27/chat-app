import React from "react";

const InputForm = ({ text, handleChange, sendMessage }) => (
    <div style={{ marginTop: '30px' }}>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
  
export default InputForm;
  