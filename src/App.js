import logo from './logo.svg';
import './App.css';
import Home from "./Containers/home";
import Header from "./Containers/header";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isAtTop,setisAtTop] = useState(true);
  const handleScroll = () =>{
    window.pageYOffset === 0? setisAtTop(true):setisAtTop(false);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <div className="App" onScroll={()=>handleScroll()}>
      <Header isAtTop = {isAtTop}/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
