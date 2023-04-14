import React from "react";
import './o2c_circle.css'

function O2C_circle() {
  return (
    <>
      <div className="main_parentDiv">
        {/* ================================= */}
        <div className="o2c_parentDiv">
          <div className="capture_img_div">
            <img src='./Image/order_capture.png' className="capture_img" />
          </div>
          <div className="o2c_img_div">
            <img src='./Image/Ellipse-144.png' className="o2c_img" />
            <div className="DashedLine DashedLine1"></div>
            <div className="DashedLine DashedLine2"></div>
            <div className="DashedLine DashedLine3"></div>
            <div className="DashedLine DashedLine4"></div>
            <div className="DashedLine DashedLine5"></div>
            <div className="DashedLine DashedLine6"></div>
            <div className="DashedLine DashedLine7"></div>
          </div>
          <div className="cash_img_div">
            <img src='./Image/cash.png' className="cash_img cash_main_img" />
          </div>
        </div>
        {/* =================================== */}
        <div className="validation_parentdiv">
          <div className="validation_img_div">
            <img src='./Image/Order_Validation.png' className="cash_img" />
          </div>
          <div className="collection_img_div">
            <img src='./Image/collection.png' className="cash_img" />
          </div>
        </div>
        {/* ========================= */}
        <div className="credit_parentDiv">
          <div className="credit_img_div">
            <img src='./Image/credit_relese.png' className="cash_img" />
          </div>
          <div className="aatp_img_div">
            <img src='./Image/AATP.png' className="cash_img aatpimg" />
          </div>
          <div className="claim_img_div">
            <img src='./Image/claim.png' className="cash_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default O2C_circle;
