import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteiner">
        <Navigation />
        <Main />
      </div>
  </div>
  );
}

export default App;
