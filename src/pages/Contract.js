import React, { useState } from "react";
import Sidebar from "./Sidebar";
import NumberFormat from "react-number-format";
import Footer from "./Footer";

export default function Contract({
  deposit,
  withdraw,
  airdrop,
  price,
  users,
  trx,
}) {
  const [toggle, setToggle] = useState(false);

  const changeNav = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div
        className="dash"
        style={{
          backgroundImage: `url("./images/bg5.png")`,
          backgroundSize: "cover",
        }}
      >
        <Sidebar toggle={toggle} />
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
              <div style={{ paddingRight: "10px" }}>Contract Stats</div>{" "}
              <div className="flame"></div>
            </div>
            <div className="refinery__text4">
              HFUEL / BUSD :{" "}
              <NumberFormat
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </div>
            <div className="refinery__flex">
              <div className="refinery__box2">
                <div className="refinery__img">
                  <img
                    src="./images/c1.svg"
                    style={{ width: "100%" }}
                    alt="ref"
                  />
                </div>
                <div className="refinery__text11">
                  <NumberFormat
                    value={deposit}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />{" "}
                </div>
                <div className="refinery__text21">
                  <NumberFormat
                    value={deposit * price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </div>
                <div className="refinery__text31">Deposited</div>
              </div>
              <div className="refinery__box2">
                <div className="refinery__img">
                  <img
                    src="./images/c3.svg"
                    style={{ width: "100%" }}
                    alt="ref"
                  />
                </div>
                <div className="refinery__text11">
                  <NumberFormat
                    value={withdraw}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />{" "}
                </div>
                <div className="refinery__text21">
                  <NumberFormat
                    value={withdraw * price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </div>
                <div className="refinery__text31">Withdrawn</div>
              </div>
              <div className="refinery__box2">
                <div className="refinery__img">
                  <img
                    src="./images/c4.svg"
                    style={{ width: "100%" }}
                    alt="ref"
                  />
                </div>
                <div className="refinery__text11">
                  <NumberFormat
                    value={airdrop}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />
                </div>
                <div className="refinery__text21">
                  <NumberFormat
                    value={airdrop * price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </div>
                <div className="refinery__text31">Airdrops</div>
              </div>
              <div className="refinery__box2">
                <div className="refinery__img">
                  <img
                    src="./images/c5.svg"
                    style={{ width: "100%" }}
                    alt="ref"
                  />
                </div>
                <div className="refinery__text11">
                  <NumberFormat
                    value={users}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />{" "}
                </div>
                <div className="refinery__text31">Users</div>
              </div>
              <div className="refinery__box2">
                <div className="refinery__img">
                  <img
                    src="./images/c6.svg"
                    style={{ width: "100%" }}
                    alt="ref"
                  />
                </div>
                <div className="refinery__text11">
                  {" "}
                  <NumberFormat
                    value={trx}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />
                </div>
                <div className="refinery__text31">Transactions</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
