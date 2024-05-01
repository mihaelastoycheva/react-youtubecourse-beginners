import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SecContent from './SecContent';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Thats first item"
    },
    {
      id: 2,
      checked: false,
      item: "Thats second item"
    },
    {
      id: 3,
      checked: false,
      item: "Thats third item"
    }

  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="Grocery list" />
      <Content />
      <SecContent
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
