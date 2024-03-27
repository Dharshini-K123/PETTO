import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Reg from'./Reg';
import Firstpage from './Firstpage';
import Dog from './Dog';
import Cat from './Cat';
import Bird from './Bird';
import Rabbit from './Rabbit';
import Thank from './Thank';
import Rule from './Rule';
import './App.css';
import './index.css';
import './styles.css';
import './Dog.css';
import Lastpage from './Lastpage';
const Join = () => {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<App/>}></Route>
        <Route path='/Reg' element={<Reg/>}></Route>
        <Route path='/Firstpage' element={<Firstpage/>}></Route>
        <Route path='/Dog' element={<Dog/>}></Route>
        <Route path='/Cat' element={<Cat/>}></Route>
        <Route path='/Bird' element={<Bird/>}></Route>
        <Route path='/Rabbit' element={<Rabbit/>}></Route>
        <Route path='/Lastpage' element={<Lastpage/>}></Route>
        <Route path='/Thank' element={<Thank/>}></Route>
        <Route path='/Rule' element={<Rule/>}></Route>
        
    </Routes>
    </BrowserRouter>
  );
};

export default Join;