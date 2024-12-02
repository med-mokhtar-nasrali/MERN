import { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <>
      <div className="container p-5">
        <Form addItem={addItem} />
        <Display items={items} setItems={setItems} />
      </div>
    </>
  );
}

export default App;
