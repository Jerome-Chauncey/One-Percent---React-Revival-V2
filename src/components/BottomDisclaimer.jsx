import React from "react";

function BottomDisclaimer() {
  return (
    <div className="d-flex justify-content-center bg-dark text-white">       
      <div className="text-start">
        <p>
          Margined FX and contracts for difference are complex leveraged
          products which carry a high level of risk and can result in losses
          that exceed your initial investment. We recommend you seek
          professional advice before investing.
        </p>
        <p>
          Any analysis, opinion, commentary or research-based material on our
          website is for information and educational purposes only and is not,
          under any circumstances, intended to be an offer, recommendation,
          advice or solicitation to buy or sell.
        </p>
        <p>
          The information on this site is not directed at residents of the
          United States, Belgium, Canada and Singapore and is not intended for
          use by any person in any jurisdiction where such use would be contrary
          to local law or regulation.
        </p>
        <div className="copyright px-2 px-sm-0">
          <p>© 2025 One Percent, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default BottomDisclaimer;
