import React from 'react';

function Pricing() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h2 className='my-4'>Unbeatable pricing</h2>
                    <p className=" text-muted"style={{ margin: "16px 0px 15px", lineHeight: "1.8rem", fontSize:"17px"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=""  style={{textDecoration:"none"}}>
                        See pricing &nbsp;
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                </div>
                
                <div className="col-6 d-flex justify-content-between align-items-center">
                    {/* Block 1 */}
                    <div className="text-center">
                        <img src="media/images/pricing0.svg" alt="pricing" style={{ width: "120px" }} />
                        <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
                        Free account opening
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="text-center">
                        <img src="media/images/pricing0.svg" alt="pricing" style={{ width: "120px" }} />
                        <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
                        Free equity delivery <br /> and direct mutual funds
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div className="text-center">
                        <img src="media/images/other-trades.svg" alt="pricing" style={{ width: "120px" }} />
                        <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
                        Intraday and F&O
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
      );
}

export default Pricing;