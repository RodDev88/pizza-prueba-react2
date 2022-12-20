
//imports

import { useContext } from "react";
import myContext from "../myContext";
import { NavLink } from "react-router-dom";

//function uso estado globl + metodo filter y renderizo detalle cont con metodo map

const Pizza = () => {
    const { pizzas, pizzaId, carro, total, setTotal } = useContext(myContext)

    const pizzaDetalle = pizzas.filter((pizza) => pizza.id === pizzaId)

    return(
        <div className="detCont">
            {pizzaDetalle.map((pizza) =>{
                return(
                    
                        <div className="detallePizza" key={pizza.id}>
                            <img src={pizza.img} alt="pizza" />
                            <div className="detInfo">
                                <h1> {pizza.name[0].toUpperCase() + pizza.name.slice(1)} </h1>
                                <p> {pizza.desc} </p>
                                <ul>
                                {pizza.ingredients.map((p) => {
                                return(
                                    <li key={p + Math.random()}>{p[0].toUpperCase() + p.slice(1)}</li>
                                        )
                                    })}
                                </ul>
                                <h2>${pizza.price}</h2>
                                <div className="btnsCard">
                                    <NavLink to="/" className="btnVerMas">Volver</NavLink>
                                    <button className="btnAddpizza" 
                                     onClick={() => {
                                        carro.push(pizza)
                                        setTotal(total + pizza.price)
                                     }}>Añadir</button>
                                     
                                </div>
                            </div>
                        </div>
                    
                )
            })}
        </div>
        
    )
}

export default Pizza;