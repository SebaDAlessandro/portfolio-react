import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import FormationCard from './components/formation/FormationCard';
import Home from './components/home/Home';
import SuccessCard from './components/experience/SuccessCard';

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
        <Route 
          path= "/successDetail/:id"
          element={<SuccessCard />}
        />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
