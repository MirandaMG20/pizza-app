import React from 'react'

function Pizza({pizzaObj}) {
    return (
        <div className='pizza'>

            <img src={pizzaObj.photoName} alt='' />

            <div> 
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredient}</p>
                <span>{pizzaObj.price}</span>
            </div>

        </div>
    );
}

export default Pizza