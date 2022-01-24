import { useState } from "react";
import './EstilosEstados.css';

export default function Contador() {

    const [counter, setCounter] = useState(0);

    const aumentar = () => {
     setCounter(counter + 1);
    };

    
    const decrementar = () => {
        setCounter(counter - 1);
       };

    const reset = () =>{
        setCounter(0);
    };

    
    return ( 
    <div>
        <p> Total Cart : {counter}</p>
        <button className="btn btn-add" onClick={aumentar}>Add</button>
        <button className="btn btn-add" onClick={decrementar}>Quit</button>
        <button className="btn btn-add" onClick={reset}>clear</button>
        
    
    </div>
    );
}

