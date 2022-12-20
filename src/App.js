// NOTA PARA MI: RECORDAR ESTUDIAR TODO REACT 2 DE NUEVO Y REFORZAR JS ARREGLOS DE OBJETOS Y METODOS

//imports 

import "./styles/styles.css"
import Header from "./components/Header";
import pizzaData from "./data/pizzas.json"
import { useState, useEffect } from "react"; 
import myContext from "./myContext";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./views/Home";
import Pizza from "./views/Pizza"
import Carro from "./views/Carro"
import HeroImage from "./components/HeroImage";

//uso de hooks 

function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaId, setPizzaId] = useState("")
  const [carro, setCarro] = useState([])
  const [total, setTotal] = useState(0)
  

useEffect(() => {
  setPizzas(pizzaData);
  console.log(pizzas)
}, [pizzas])


// retorno la GUI utilizando las herramientas de react Context, provider, components, wrap Browser router, routes 

  return (
    <myContext.Provider value={{ pizzas, setPizzas, pizzaId, setPizzaId, carro, setCarro, total, setTotal }}>
      <div className="App">
        
          <Header/>
          <HeroImage/>
          <BrowserRouter>
          <NavLink to="/carro/" className="totalHeader">Total: $ { total } </NavLink>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path="/pizza/:pizzaId" element={ <Pizza />} />
            <Route path="/carro/" element={ <Carro />} />
          </Routes>

          </BrowserRouter>
        

        
      </div>
    </myContext.Provider>
  );
}

export default App;

//RECORDAR LO ESCRIBÍ ARRIBA 