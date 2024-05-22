
import React, { useState } from 'react';
import './App.css';
const App = () => {
  // Define a state variable 'outputString' and a function 'setOutputString' to update it
  const [outputString, setOutputString] = useState('');

  // Function to handle the tile click event
  const handleTileClick = (letter) => {
    // Append the clicked letter to the current output string
    let newOutput = outputString + letter;

    // Handle consecutive letter replacement
    newOutput = replaceConsecutiveLetters(newOutput);

    // Update the output string state with the new value
    setOutputString(newOutput);
  };

  // Function to replace consecutive letters with underscores
  const replaceConsecutiveLetters = (str) => {
    // Use a regular expression to find sequences of three or more identical letters
    // Replace each sequence with underscores, one underscore for each group of three letters
    return str.replace(/(.)\1{2,}/g, (match) => '_'.repeat(Math.ceil(match.length / 3)));
  };

  // Function to render the alphabet tiles
  const renderTiles = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Split the alphabet string into an array of letters
    // Map each letter to a button element
    return alphabet.split('').map((letter) => (
      // Each button has a unique key, click event handler, and CSS class
      <button key={letter} onClick={() => handleTileClick(letter)} className="tile">
        {letter}
      </button>
    ));
  };
  return (
    <div className="App">
      <div className="tile-container">{renderTiles()}</div>
      <div id="outputString">Output String : {outputString}</div>
    </div>
  );
};

// Export the App component as the default export
export default App;
