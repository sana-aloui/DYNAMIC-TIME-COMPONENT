import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Time from "./Component/Time";
 const mis = 1800000
function App() {
  return (
    <div className="App">
      <Time mis={mis}/>

    </div>
  );
}

export default App;
