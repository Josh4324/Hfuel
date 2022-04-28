import React, { useState } from "react";
import NumberFormat from "react-number-format";

export default function Refinery({
  available,
  price,
  deposit,
  claimed,
  maxPay,
  sk,
  hnw,
  loading,
}) {
  console.log(price, "pr");
  const [toggle, setToggle] = useState(false);

  const changeNav = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="refinery">
        <div className="mobile-nav">
          <div>
            <img src="./images/ref.svg" alt="ref" />
          </div>
          <div>
            <img
              src="./images/ham.svg"
              onClick={changeNav}
              className="ham"
              alt="ref"
            />
          </div>
        </div>
        <div className="refinery__stat">
          <div style={{ paddingRight: "10px" }}>My Stats</div>{" "}
          <div className="flame"></div>
        </div>
        <div className="refinery__text4">
          HFUEL / BUSD :
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
          />
        </div>
        {loading === true ? (
          <div style={{ color: "white" }}>loading....</div>
        ) : (
          ""
        )}
        <div className="refinery__flex">
          <div className="refinery__box">
            <div className="refinery__text1">
              {" "}
              <NumberFormat
                value={available}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />{" "}
              HFUEL
            </div>
            <div className="refinery__text2">
              {" "}
              <NumberFormat
                value={available * price}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                prefix={"$"}
              />
            </div>
            <div className="refinery__text3">Available</div>
          </div>
          <div className="refinery__box">
            <div className="refinery__text1">
              {" "}
              <NumberFormat
                value={deposit}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />{" "}
              HFUEL
            </div>
            <div className="refinery__text2">
              <NumberFormat
                value={deposit * price}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                prefix={"$"}
              />
            </div>
            <div className="refinery__text3">Deposited</div>
          </div>
          <div className="refinery__box">
            <div className="refinery__text1">
              {" "}
              <NumberFormat
                value={claimed}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />{" "}
              HFUEL
            </div>
            <div className="refinery__text2">
              <NumberFormat
                value={claimed * price}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                prefix={"$"}
              />
            </div>
            <div className="refinery__text3">Claimed</div>
          </div>
          <div className="refinery__box">
            <div className="refinery__text1">
              {" "}
              <NumberFormat
                value={maxPay}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />{" "}
              HFUEL
            </div>
            <div className="refinery__text2">
              <NumberFormat
                value={maxPay * price}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                prefix={"$"}
              />
            </div>
            <div className="refinery__text3">Max Payout</div>
          </div>
          <div className="refinery__box">
            <div className="refinery__text1">
              <NumberFormat
                value={hnw}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />{" "}
              xHNW
            </div>
            <div className="refinery__text3" style={{ width: "200px" }}>
              xHNW Balance
            </div>
          </div>
          <div className="refinery__box">
            <div className="refinery__text1">
              <NumberFormat
                value={sk}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />{" "}
              xSK
            </div>
            <div className="refinery__text3" style={{ width: "200px" }}>
              xSK Balance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
