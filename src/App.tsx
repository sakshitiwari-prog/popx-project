import React from 'react';
import logo from './logo.svg';
import './style/main.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Signin from './Components/Signin';
import Profile from './Components/Profile';
import Signup from './Components/Signup'
function App() {
  return (
    
    <Router>
    {/* <Home></Home> */}
    {/* <Router> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Profile' element={<Profile></Profile>}></Route>
        <Route path='/Signin' element={<Signin></Signin>}></Route>
      </Routes>
    {/* </Router> */}
  </Router>
  );
}

export default App;
