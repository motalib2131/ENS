import React, { useState } from "react";
import o2d from "./photosunilever/o2d.png";
import b2c from "./photosunilever/b2c.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { OrderSection2 } from "./data";
import { OrderSection } from "./data";
import "./O2Cuniverse.css"

const O2CUniverse = () => {
  const [data2, setData2] = useState(OrderSection2);
  const [dataa, setDataa] = useState(OrderSection);

  const [mydata, setmydata] = useState(0);

  return (
    <div>
      <div className="orderToCase_maindiv">
        <p className="unilever_heading">
          Unilever Order 2 Cash <span className="universe">Univerese</span>
        </p>
        <div className="btn_div">
          <button
            className={mydata === 0 ? "o2d_btn" : "b2c_btn"}
            onClick={() => setmydata(0)}
          >
            <img src={o2d} className="o2d_img" />
          </button>
          <button
            className={mydata === 1 ? "o2d_btn" : "b2c_btn"}
            onClick={() => setmydata(1)}
          >
            <img src={b2c} className="b2c_img" />
          </button>
          
        </div>

        {mydata === 0 && (
          <div className="o2cSection">
            {dataa.map((curElem) => {
              return (
                <div className="card">
                  <img src={curElem.img} className="card_neoimg" />
                  <p className="order_headi">{curElem.heading}</p>
                  <p className="order_para">{curElem.description}</p>
                  <div className="btn_arrowdiv">
                    <button className="read_btn">Read More</button>
                    <IoIosArrowRoundForward />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {mydata == 1 && (
        <div className="o2cSection wrapping">
          {data2.map((curElem) => {
            return (
              <div className="card2">
                <img src={curElem.img} className="card_neoimg" />
                <p className="order_headi">{curElem.heading}</p>
                <p className="order_para">{curElem.description}</p>
                <div className="btn_arrowdiv">
                  <button className="read_btn">Read More</button>
                  <IoIosArrowRoundForward />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default O2CUniverse;
