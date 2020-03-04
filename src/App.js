import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Input from './components/Input';
import set_result from './logic'

function App() {
  
  return (
    <div className="container p-2   text-white p-3 bg-secondary" >
      
      <Input id="1" name="количество положительных исходов"/>
      <Input id='2' name="количество всех возможных исходов"/>
      <div className="row ">
      <div className="col-4">
      <button onClick={set_result}>результат</button>
      </div>
      <div className="col-4">
  <p id="result"></p>
  </div>
    </div>
    </div>
  );
}

export default App;
