import { useState, useEffect } from "react";

const EstaLloviendo = () => {
    const [llueve, setLlueve] = useState("Si llueve");

    useEffect(() => {
      console.log('El componente se acaba de montar');
        
        return () => {
            console.log("desmonte");
        }
      },[]);
    


    const cambiarLluvia = () => {
        if (llueve === "Si llueve") {
            setLlueve("No llueve");
        } else {
            setLlueve("Si llueve");
        }

    };

    return (
        <div>
            <br />
            <h2>¿ Cómo esta el clima hoy? {llueve}</h2>
            <button onClick={cambiarLluvia}>Cambiar</button>
            
        </div>
    )

};

export default EstaLloviendo;