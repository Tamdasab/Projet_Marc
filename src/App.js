import './App.css';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Pharmacie from './pages/Pharmacie';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='pharmacie' element={<Pharmacie />} />
        <Route path='connexion' element={<Connexion />} />
        <Route path='inscription' element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
