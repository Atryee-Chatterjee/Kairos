import React from "react";

function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row p-5 text-center" >
        <h3 className="mb-4">The Kairos Universe</h3>
        <p className=" mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{height: "55px", width: "200px", marginBottom: "20px"}} />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{height: "55px", width: "200px", marginBottom: "20px"}} />
          <p className="text-muted text-small">
            Systematic trading platform
that allows you to create and backtest
strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{height: "50px", width: "150px", marginBottom: "20px"}} />
          <p className="text-muted text-small">
            Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free
          </p>
        </div>
      </div>
      {/* 2nd row */}
      <div className="row p-5 text-center">
        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" style={{height: "55px", width: "200px", marginBottom: "20px"}} />
          <p className="text-muted text-small">
            Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
          </p>
        </div>
        
        <div className="col-4 p-3">
          <img src="media/images/goldenpiLogo.png" style={{height: "55px", width: "200px", marginBottom: "20px"}} />
          <p className="text-muted text-small">
            Bonds trading platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" style={{height: "55px", width: "200px", marginBottom: "20px"}} />
          <p className="text-muted text-small">
            Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.

          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-5' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
