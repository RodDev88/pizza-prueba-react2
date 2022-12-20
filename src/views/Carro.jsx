//imports

import myContext from "../myContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

//main function

const Carro = () => {
    const { carro, total } = useContext(myContext);
    return(
        <ul className="carroCompras">
            {carro.map((item) => {
                return(
                    <li key={item.id + Math.random()} className="itemCarro">
                        <img src={item.img} alt="pizza" />
                        <p>{ item.name[0].toUpperCase() + item.name.slice(1) }</p>
                        <p className="itemPrice"> { item.price } </p>
                    </li>
                )
            })}
            
            <h2>Total: ${ total } </h2>
            <NavLink to="/" className="btnVolver">Volver</NavLink>
            <button type="submit" className="btnComprar">Comprar</button>
             
        </ul>
        
    )
} 
export default Carro;