// imports

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './assets/Navbar';
import UserCard from './assets/CompoFuncional/CompoFuncional';
import Layout from './assets/CardContainer';
import EstadoLluvia from './assets/CardContainer/EstadosC';
import EstaLloviendo from './assets/CardContainer/EstadosHijo';
import { useEffect, useState } from 'react';
import Items from './assets/CardContainer/Items';
import { getProductos } from './assets/CardContainer/ProductosItems';
//import ComponenteFuncional from './assets/CompoFuncional/CompoFuncional';
//import Landing from './assets/landing/Landing';



function App() {

  const [listaProducts, setListaProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{

    setIsLoading(true);

    getProductos()
    .then((result)=> setListaProducts(result))
    .catch((error)=> console.log(error))
    .finally(()=> setIsLoading(false));

  },[]);
  

  return (
    

    <div className="App">
    <nav>
      <Navbar />
    </nav>
    
    <br /><br /><br /><br />
    <section className="item-card container-fluid">
      
    {listaProducts.map((producto) =>{

      return <Items key={producto.id} producto={producto} />
      })}
    </section>

    </div>

  );

}

export default App;
