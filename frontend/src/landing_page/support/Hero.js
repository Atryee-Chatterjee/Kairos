import React from "react";

function Hero() {
  return (
    <section className="container-fluid py-5" id="supportHero">
      <div className="container">
        <div id="supportWrapper" className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>

        <div className="row align-items-center py-4">
          <div className="col-md-7">
            <h1 className="fs-3 fw-bold text-white">Search for an answer or browse help topics to create a ticket</h1>

            <div className="my-3">
              <div className="input-group" style={{maxWidth: '520px'}}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: how do i activate F&Q, why is my order getting rejected.."
                  style={{borderRadius: '8px'}}
                />
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3 support-links mt-1">
              <a href="" className="text-white small">Track account opening</a>
              <a href="" className="text-white small">Track segment activation</a>
              <a href="" className="text-white small">Intraday margins</a>
              <a href="" className="text-white small">Kite user manual</a>
            </div>
          </div>

          <div className="col-md-5 mt-4 mt-md-0">
            <h3 className="fw-bold text-white">Featured</h3>
            <ol className="ps-3 featured-list">
              <li><a href="" className="text-white">Current Takeovers and Delisting - january 2026</a></li>
              <li><a href="" className="text-white">Latest intraday leverages - MIS &amp; CO</a></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
