import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import FormationCard from './components/formation/FormationCard';
import Home from './components/home/Home';
import SuccessCard from './components/experience/SuccessCard';
import ErrorPage from './components/error/ErrorPage';
import Contact from './components/contact/Contact';

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
        <Route 
          path= '/contact'
          element={<Contact />}
        />
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
