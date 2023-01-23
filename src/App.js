import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Formation from './components/formation/Formation';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Formation />
      <Footer />
    </div>
  );
}

export default App;
