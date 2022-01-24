import { useState } from "react";
import './EstilosEstados.css';
import 'react-bootstrap';

const Items = ({ producto }) => {

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
        <div className="item-card">
            <div className="card-contain">
                <img className="img-card" src={producto.img} alt={producto.nombreone} />
                <div className="card-body" width='200px'>
                    <p>Nombre:{producto.nombreone}</p>
                    <p>Descripcion:{producto.descriptionone}</p>
                    <p>Precio:{producto.priceone}</p>
                    <p>Stock disponible: {producto.stock}</p>
                    <div>
                        <p> Total Cart : {counter}</p>
                        <button className="btn btn-add" onClick={aumentar}>Add</button>
                        <button className="btn btn-add" onClick={decrementar}>Quit</button>
                        <button className="btn btn-add" onClick={reset}>clear</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;