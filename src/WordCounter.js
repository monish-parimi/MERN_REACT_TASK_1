import React, { useState } from 'react';
import './WordCounter.css';
function WordCounter() {
  const [text, setText] = useState('Hi All');
  const words = text.trim().split(/\s+/);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <textarea
        rows="10"
        cols="60"
        placeholder="Type here"
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {words.length}</p>
    </div>
  );
}
export default WordCounter;