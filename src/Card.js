import React from 'react'

export const Card=()=>{
    return(
        <div id='card'>
            <div className='tile' id='plan'>
                <h1>Plan features</h1>
            </div>
            <div className='tile' id='bronze'>
                <h1>BRONZE</h1>
                <h2>N500</h2>
                <p>Per month</p>
                <button>Activate</button>
            </div>
            <div className='tile' id='silver'>
                <h1>SILVER</h1>
                <h2>N2,000 </h2>
                <p>Per month</p>
                <button>Activate</button>
            </div>
            <div className='tile' id='gold'>
                <h1>GOLD</h1>
                <h2>N2,500</h2>
                <p>Per month</p>
                <button>Activate</button>
            </div>           
        </div>
    )
};





