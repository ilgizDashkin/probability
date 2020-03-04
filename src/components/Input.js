import React from 'react'



function Input(props) {

    return (
        <div className="row ">
            <div className="col-4">
            <p>{props.name} </p>
            </div>  
             <div className="col-2">
              <input id={props.id} type="number"></input>
             </div>                  
        </div>
    )
}



export default Input