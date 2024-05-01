import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SecContent from './SecContent';

function App() {
  
  return (
    <div className="App">
      <Header title="Grocery list" />
      <Content />
      <SecContent />
      <Footer />
    </div>
  );
}

export default App;
