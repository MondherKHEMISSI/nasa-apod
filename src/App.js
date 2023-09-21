import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto';

function App() {

  return (
    <HashRouter>
      <div className='app'>
        <Routes>
        <Route Component={Home} path='/' exact />
        <Route Component={NasaPhoto} path='/nasaphoto' />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
