import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Cheque from './pages/Cheque/Cheque';

import Main from './pages/Main/Main';


function App() {
  
  return (
    <div className="App">
      <Header />

      <Routes>  
        <Route path='/' element={<Main />} />
        <Route path='/cheque' element={<Cheque />} />
      </Routes>

      
    </div>
  )
}

export default App
