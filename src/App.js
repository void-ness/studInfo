import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import 'react-chatbot-kit/build/main.css';

import StudBot from "./components/StudBot";
import Home from "./components/Home";
import StudInfo from "./components/StudInfo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<StudBot />} path='/chatbot'></Route>
          <Route element={<StudInfo />} path='/studinfo'></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;