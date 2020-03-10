import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Panel from './components/Panel';
import Panel2 from './components/Panel2';
import { simple_probality, combinat_placement,combinat_combination,combinat_transposition,view_bernuli } from './logic'

function App() {

  return (
    <div className="container p-2   text-white p-3 bg-dark" >
      <Panel name="простая вероятность" img_name='img/simple_probability.svg' id_1='simple_probality1' id_2='simple_probality2' id_3='result_simple_probality'
      name_input_1="количество положительных исходов n" name_input_2="количество всех возможных исходов N" set_result={simple_probality} />

      <Panel name="комбинаторика размещение" img_name='img/placement.svg' id_1='combinat_placement1' id_2='combinat_placement2' id_3='result_combinat_placement'
      name_input_1="количество различных элементов k" name_input_2="количество мест возможных размещений этих элементов n"set_result={combinat_placement} />

     <Panel name="комбинаторика сочетание (тоже самое что размещение, но порядок выбранных элементов не важен!)" img_name='img/combination.svg' id_1='combinat_combination1' 
     id_2='combinat_combination2' id_3='result_combinat_combination'
      name_input_1="количество различных элементов k" name_input_2="количество мест возможных размещений этих элементов n"set_result={combinat_combination} />

    <Panel name="комбинаторика перестановка (подстановка)" img_name='img/transposition.svg' id_1='combinat_transposition1' id_2='combinat_transposition2' 
    id_3='result_combinat_transposition'
      name_input_1="количество различных элементов соответствует количеству мест (вводить не надо)" name_input_2="количество мест возможных перестановок этих элементов n" 
      set_result={combinat_transposition} />
      
    <Panel2 name="Формула Бернулли — формула в теории вероятностей,
     позволяющая находить вероятность появления события A определённое количество раз при нескольких независимых испытаниях
      (по сути формула успеха события при повторении n раз, будет к раз успех)"
     img_name='img/bernuli.svg' id_1='bernuli_1' id_2='bernuli_2' id_3='bernuli_3' id_4='result_bernuli'
      name_input_1="количество раз наступления события к" 
      name_input_2="всего количество событий n" 
      name_input_3="вероятность наступления события p"
      set_result={view_bernuli} />
    
    </div>
  );
}

export default App;
