import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="App">
      <p>{items.join(', ')}</p>
    </div>
  );
}

export default App;
