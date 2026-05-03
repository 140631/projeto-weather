
import { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CityDetail from './pages/CityDetail/CityDetail';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <Router>
      <Header />
      <Suspense 
        fallback={
          <div className="loader-overlay">
            <Loader 
              message="Carregando página..." 
              size="large"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:id" element={<CityDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
