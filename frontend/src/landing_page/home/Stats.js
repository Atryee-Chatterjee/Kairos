import React from "react";

function Stats() {
  return (
    <div>
      <div className="container p-3">
        <div className="row p-5">
          <div className="col-5 p-5">
            <h1 className="fs-2 mb-5">Trust with confidence</h1>

            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted" style={{ margin: "5px 0px 32px", lineHeight: "1.8rem"}}>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>

            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="text-muted" style={{ margin: "5px 0px 32px", lineHeight: "1.8rem"}}>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>

            <h2 className="fs-4">The Kairos universe</h2>
            <p className="text-muted" style={{ margin: "5px 0px 32px", lineHeight: "1.8rem"}}>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h2 className="fs-4">Do better with money</h2>
            <p className="text-muted" style={{ margin: "5px 0px 32px", lineHeight: "1.8rem"}}>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-7 p-5">
            <img
              className="mt-4"
              src="media/images/ecosystem.png"
              style={{ width: "100%" }}
            />

            <div className="text-center mt-5">
              <a href="" className="mx-5" style={{textDecoration:"none"}}>
                Explore our products &nbsp;
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>

              <a href=""  style={{textDecoration:"none"}}>
                Try Kite demo &nbsp;
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
