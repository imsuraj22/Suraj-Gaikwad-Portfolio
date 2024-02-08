import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import Navbar from './Pages/Navbar';
import Home from "./Pages/Home/HomeScreen"
function App() {
  // const images = [
  //   'https://via.placeholder.com/800x400/ff5733/fff',
  //   'https://via.placeholder.com/800x400/33ff57/fff',
  //   'https://via.placeholder.com/800x400/5733ff/fff',
  // ];
  // return (
  //   <div className="App">
  //     {/* <h1>Simple React Carousel</h1> */}
  //     <Carousel images={images} />
  //   </div>
  // );
  return (
    <div className="App">
     

      <Router>
        <div>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;

