import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/images/education.svg" alt="img"/>
                </div>
                <div className='col-6'>
                    <h2 className='my-4'>Free and open market education</h2>
                    <p className=" text-muted"style={{ margin: "16px 0px 15px", lineHeight: "1.8rem", fontSize:"17px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=""  style={{textDecoration:"none"}}>
                        Versity &nbsp;
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className="mt-5 text-muted "style={{ margin: "16px 0px 15px", lineHeight: "1.8rem", fontSize:"17px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=""  style={{textDecoration:"none"}}>
                        TradingQ&A &nbsp;
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

            </div>

        </div>
    );
}

export default Education;