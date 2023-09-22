import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState('');
  return (
    <HashRouter>
      <div className='app'>
        <Routes>
        <Route element={<Home handleChange={date => setDate(date)} />} path='/' exact  />
        <Route element={<NasaPhoto date={date} />} path='/nasaphoto' />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
