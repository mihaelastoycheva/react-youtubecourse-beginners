import AddColorName from './AddColorName';
import ColorSquare from './ColorSquare';
import { useState } from 'react'
import './index.css';

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState()
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <ColorSquare
        colorValue={colorValue}
        hexValue={hexValue}
      />
      <AddColorName
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
