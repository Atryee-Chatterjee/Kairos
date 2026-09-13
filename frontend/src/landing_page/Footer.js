import React from "react";

function Footer() {
  return (
    <div className="container border-top mt-5" style={{backgroundColor: "#FBFBFB"}}>
      <div className="row mt-5" id="footerLinks">
        <div className="col">
          <img src="media/images/logo.svg" style={{ width: "50%" }} />
          <p className="mt-3">
            &copy; 2010 - 2026, Kairos Broking Ltd. All rights reserved.
          </p>
          <div className="d-flex gap-3 mt-3">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" aria-label="X (Twitter)">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>

          <div className="d-flex gap-3 mt-3 border-top pt-3">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a href="#" className="social-icon" aria-label="X (Twitter)">
              <i class="fa fa-telegram" aria-hidden="true"></i>
            </a>
          </div>
          <div className="d-flex gap-3 mt-3 pt-4">
            <a href="mailto:complaints@kairos.com">
              <i class="fa fa-envelope" aria-hidden="true"></i> : complaints@kairos.com
            </a>
          </div>
        </div>
        <div className="col" style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p style={{fontSize:"16px"}}>Company</p>
          <a href="#" className="footer-link"> About </a>
          <a href="#" className="footer-link"> Philosophy</a>
          <a href="#" className="footer-link"> Press & media</a>
          <a href="#" className="footer-link"> Careers</a>
          <a href="#" className="footer-link"> Kairos Cares (CSR)</a>
          <a href="#" className="footer-link"> Kairos.tech</a>
          <a href="#" className="footer-link"> Open source</a>
          <a href="#" className="footer-link"> Referral program</a>
        </div>
        <div className="col" style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p>Support </p>
          <a href="#" className="footer-link">Contact us</a>
          <a href="#" className="footer-link">Support portal</a>
          <a href="#" className="footer-link">How to file a complaint?</a>
          <a href="#" className="footer-link">Status of your complaints</a>
          <a href="#" className="footer-link">Bulletin</a>
          <a href="#" className="footer-link">Circular</a>
          <a href="#" className="footer-link">K-Connect blog</a>
          <a href="#" className="footer-link">Downloads</a>
        </div>
        <div className="col" style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p>Account</p>
          <a href="#" className="footer-link">Open demat account</a>
          <a href="#" className="footer-link">Minor demat account</a>
          <a href="#" className="footer-link">NRI demat account</a>
          <a href="#" className="footer-link">HUF demat account</a>
          <a href="#" className="footer-link">Commodity</a>
          <a href="#" className="footer-link">Dematerialisation</a>
          <a href="#" className="footer-link">Fund transfer</a>
          <a href="#" className="footer-link">MTF</a>
        </div>
      </div>

      <div className="mt-5 text-muted" style={{fontSize: "11px"}}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month</p>

        <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

        <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

        <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>

      </div>

      <div className="row">
        <div className="col-12 mt-3 mb-4">
          <div className="d-flex flex-wrap justify-content-center gap-3 text-muted" style={{ fontSize: "14px" }}>
            <a href="#" className="footer-link">NSE</a>
            <a href="#" className="footer-link">BSE</a>
            <a href="#" className="footer-link">MCX</a>
            <a href="#" className="footer-link">Terms & conditions</a>
            <a href="#" className="footer-link">Policies & procedures</a>
            <a href="#" className="footer-link">Privacy policy</a>
            <a href="#" className="footer-link">Disclosure</a>
            <a href="#" className="footer-link">For investor&apos;s attention</a>
            <a href="#" className="footer-link">Investor charter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
