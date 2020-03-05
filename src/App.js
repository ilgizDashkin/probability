import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Panel from './components/Panel';
import { simple_probality, combinat_placement } from './logic'

function App() {

  return (
    <div className="container p-2   text-white p-3 bg-dark" >
      <Panel name="простая вероятность" id_1='simple_probality1' id_2='simple_probality2' id_3='result_simple_probality'
      name_input_1="количество положительных исходов" name_input_2="количество всех возможных исходов" set_result={simple_probality} />
      <Panel name="комбинаторика размещение" id_1='combinat_placement1' id_2='combinat_placement2' id_3='result_combinat_placement'
      name_input_1="количество элементов" name_input_2="количество возможных размещений"set_result={combinat_placement} />
    </div>
  );
}

export default App;
