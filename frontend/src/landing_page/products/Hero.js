import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 border-bottom mb-5">
            <div className='text-center mt-5 p-5 mb-5'>
                <h1 >Kairos Products</h1>
                <h3 className='text-muted mt-3 mb-4 fs-5 '>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-2'>Check out our <a href="#"  style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;