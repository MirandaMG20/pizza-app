import React from 'react'
import Pizza from './Pizza'

function Menu(props) {

    // console.log(typeof props)
    // console.log(props.pizzaData)
    const numPizzas = props.pizzaData.length
    return (
        <main className='menu'>
            <h2>Our Menu</h2>

                {/* Ternary Example */}
                {numPizzas > 0 ? (
                    <ul className='pizzas'>
                        {props.pizzaData.map((pizza) => (
                            <Pizza pizzaObj={pizza} />
                        ))}
                    </ul>
                ) : (
                    <p>We're still working on our menu, please come back later.</p>
                )}

                {/* // <Pizza
                //     key={pizza.name}
                //     name={pizza.name}
                //     photoName={pizza.photoName}
                //     ingredient={pizza.ingredients}
                //     price={pizza.price}
                // /> */}

                {/* <Pizza
                name='Focaccia'
                ingredient='Bread with italian olive oil and rosemary'
                photoName='pizzas/focaccia.jpg'
                price={6} // {} remove the value as a string
                /> */}

                {/* <Pizza
                name="Pizza Spinaci"
                ingredient="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={12}
                /> */}
        </main>
    )
}

export default Menu