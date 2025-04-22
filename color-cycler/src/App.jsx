import { useState } from 'react';
import './App.css';

const colors = ['#ffadad', '#ffd6a5', '#caffbf', '#9bf6ff', '#a0c4ff'];

function App() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div
      className="app-container"
      style={{ backgroundColor: colors[index] }}
    >
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;

