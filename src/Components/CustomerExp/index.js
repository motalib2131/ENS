import React, { useState } from "react";
import './CustomerExp.css'

function CustomerExp() {

  function video(){
    document.getElementById('customerVideo').play();
  }

  return (
    <>
      <div className="cutomerexpSection">
        <div className="customerexpImg">
          {/* <img className="customerImg" src="./Image/cutomer.png" alt="" /> */}
          <video className="customerImg" id="customerVideo" src="./Gif/customerGif.mp4" type="video/mp4" width="100%" poster="./Image/cutomer.png" autoplay={true}>
          </video>
          <div className="experienceImges" onClick={video} >
            <img className="groupImg" src="./Image/Group1.png" alt="" />
            <img className="bttnImg" src="./Image/Group2.gif" alt="" />
          </div> 
        </div>
        <div className="customerexpTxt">
          <h1 className="customerexpHead">
            Customer <span className="chngeText">Experience</span> 
          </h1>
          <p className="customerexpDes">
            We in Customer Experience team strive to make the processes more
            efficient, agile and deliver business value.
          </p>
          <p className="customerexpDes">
            ~ The ambition is to become
            <strong> number 1 supplier of choice ~</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default CustomerExp;
