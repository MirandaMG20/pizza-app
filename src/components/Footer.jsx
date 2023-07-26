import React from 'react';

function Footer() {
    const hour = new Date().getHours();
    const openHour = 11;
    const closedHour = 22;
    const isOpen = hour >= openHour && hour <= closedHour // Look at line 10
    console.log(isOpen, hour)

    // Same as Line 7
    // if(hour >= openHour && hour <= closedHour) { 
    //     console.log('We are currently open.')
    // } else {
    //     console.log('Sorry, we are closed.')
    // }

    return (
        <footer className='footer'>
            <div className='order'>
                {
                    isOpen && (
                        <p>We're Open Until {closedHour}:00. Cove visit us or order online</p>
                    )
                }

                <button className='btn'>Order</button>

                {/* <h1>{new Date().toLocaleTimeString()} We are currently Open</h1> */}
            </div>
        </footer>
    );
}

export default Footer;