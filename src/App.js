import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Panel from './components/Panel';
import Panel2 from './components/Panel2';
import { simple_probality, combinat_placement,combinat_combination,combinat_transposition,view_bernuli,view_independent_events,view_dependency_events,view_join_events,
  view_nojoin_events
 } from './logic'

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
    
    <Panel name="формула вероятности наступления события А и B (произведения вероятностей) для независимых событий" img_name='img/independent_events.jpg' 
    id_1='independent_events_1' id_2='independent_events_2' id_3='result_independent_events'
      name_input_1="вероятность наступления события А" name_input_2="вероятность наступления события В" set_result={view_independent_events} />

<Panel name="формула вероятности наступления события А и B (произведения вероятностей) для зависимых событий" img_name='img/dependency_events.jpg' 
    id_1='dependency_events_1' id_2='dependency_events_2' id_3='result_dependency_events'
      name_input_1="вероятность наступления события А" name_input_2="вероятность наступления события В/A события В зависимого от А" set_result={view_dependency_events} />

<Panel2 name="формула вероятности наступления события А или B (суммы вероятностей) для совместных событий (события которые могут происходить одновременно)"
     img_name='img/join_events.jpg' id_1='join_events_1' id_2='join_events_2' id_3='join_events_3' id_4='result_join_events'
      name_input_1="вероятность наступления события А" 
      name_input_2="вероятность наступления события А" 
      name_input_3="вероятность наступления события АB (произведения вероятностей)"
      set_result={view_join_events} />

<Panel name="формула вероятности наступления события А или B (суммы вероятностей) для несовместных событий (события которые не могут происходить одновременно)"
 img_name='img/nojoin_events.jpg' id_1='nojoin_events_1' id_2='nojoin_events_2' id_3='result_nojoin_events'
      name_input_1="вероятность наступления события А" name_input_2="вероятность наступления события В" set_result={view_nojoin_events} />
  
    </div>
  );
}

export default App;
