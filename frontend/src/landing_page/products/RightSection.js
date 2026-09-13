import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return (  
        <div className='container mt-5 '>
            <div className='row p-5 '>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p className='pt-4'>{productDescription}</p>
                    <div className='pt-3'>
                        <a href={learnMore} style={{textDecoration:"none"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className='col-6'>
                    <img src={imageURL} />
                </div>
            </div>
             
        </div>
    );
}

export default RightSection;