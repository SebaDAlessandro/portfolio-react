import './App.css';
import Footer from './components/footer/Footer';
import FormationCard from './components/formation/FormationCard';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
            path= "/"
            element={<Home />}
        />
        <Route 
          path= "/FormationDetail/:id"
          element={<FormationCard />}
        />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
