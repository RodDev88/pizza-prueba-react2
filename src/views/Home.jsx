//imports

import { useContext} from "react"
import myContext from "../myContext"
import { useNavigate } from "react-router";

//function estado global, uso hook useNavigate y dibuja 
//lista de pizzas con datos del json pizzas ademas de uso de buttons y eventos 

const Home = () => {
    const {pizzas, pizzaId, setPizzaId, carro, total, setTotal} = useContext(myContext);

    const navigate = useNavigate();
    const verPizza = () => navigate(`/pizza/${pizzaId}`)

    return(
        
        <section className="listaPizzas">
            {pizzas.map((pizza) => {
                return(
                <div key={pizza.id} className="cardPizza">
                    <img src={pizza.img} alt={pizza.name} />
                    <h2>{pizza.name[0].toUpperCase() + pizza.name.slice(1)}</h2>
                    <ul>
                        {pizza.ingredients.map((p) => {
                            return(
                                <li key={p + Math.random()}>{p[0].toUpperCase() + p.slice(1)}</li>
                            )
                        })}
                    </ul>
                    <p className="pricePizza">${pizza.price}</p>
                    <div className="btnsCard">
                        <button className="btnVerMas" onMouseOver={() => setPizzaId(pizza.id)} onClick={verPizza}>Ver más</button>
                        <button className="btnAddpizza" onClick={() => {
                                        carro.push(pizza)
                                        setTotal(total + pizza.price)
                                        console.log(total)
                                        console.log(carro)
                                     }}>Añadir</button>

                    </div>
                    
                </div>
                )

            })}
        </section>
    )
}

export default Home;