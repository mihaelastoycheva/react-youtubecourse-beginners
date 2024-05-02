import AddColorName from './AddColorName';
import ColorSquare from './ColorSquare';
import { useState } from 'react'
import './index.css';

function App() {
  const [colorValue, setColorValue] = useState('')


  return (
    <div className="App">
      <ColorSquare colorValue={colorValue} />
      <AddColorName
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
    </div>
  );
}

export default App;
