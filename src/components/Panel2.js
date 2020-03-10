import React from 'react';
import Input from './Input';


function Panel2(props) {

  return (
    <div className="border border-primary bg-secondary">
      <h4>{props.name}</h4>
      <img src={props.img_name} alt="формула"></img>
      <Input id={props.id_1} name={props.name_input_1} />
      <Input id={props.id_2} name={props.name_input_2} />
      <Input id={props.id_3} name={props.name_input_3} />
      <div className="row ">
        <div className="col-4">
          <button className="btn btn-success btn-lg btn-block" onClick={props.set_result}>результат</button>
        </div>
        <div className="col-4">
          <p id={props.id_4}></p>
        </div>
      </div>
    </div>
  );
}

export default Panel2;