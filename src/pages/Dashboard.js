import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import NumberFormat from "react-number-format";
import Footer from "./Footer";

export default function Dashboard({
  available,
  price,
  deposit,
  claimed,
  maxPay,
  sk,
  hnw,
  loading,
}) {
  const [toggle, setToggle] = useState(false);

  const changeNav = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const wallet = localStorage.getItem("hwall");
    if (!wallet) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div
      className="dash"
      style={{
        backgroundImage: `url("./images/bg3.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <Sidebar toggle={toggle} />
      <div>
        <div>
          <div className="refinery">
            <div className="mobile-nav none1">
              <div>
                <img
                  src="./images/ref.svg"
                  className="mobile__logo"
                  alt="ref"
                />
              </div>
              <div>
                <img
                  src="./images/ham2.svg"
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

          <Footer />
        </div>
      </div>
    </div>
  );
}