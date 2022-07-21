import React from 'react';
import NavBar from './Components/NavBar';
import { Routes ,Route } from 'react-router-dom';
import MainContent from './MainContent';
import LastContent from './LastContent';

const App = () => {
  return (
    <div>
      <NavBar/> 
      
      <Routes>
        <Route path='/' element={<MainContent/>}></Route>
        <Route path='/LastContent' element={<LastContent/>}></Route>
      </Routes>
      

      
    </div>
  )
}

export default App