import React, { useState } from "react";
import Sidebar from "./Sidebar";
import NumberFormat from "react-number-format";
import Footer from "./Footer";

export default function Stat({
  upline,
  rolls,
  referrals,
  price,
  db,
  mb,
  userAirdrop,
  userAirdrop2,
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
          backgroundImage: `url("./images/bg3.jpg")`,
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
              <div style={{ paddingRight: "10px" }}>User Stats</div>{" "}
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
            <div className="refinery__text4 none" style={{ width: "250px" }}>
              UPLINE : {upline}
            </div>
            <div className="refinery__text4 none1" style={{ width: "250px" }}>
              UPLINE : {upline.slice(0, 5) + "....." + upline.slice(-5, -1)}
            </div>
            <div className="refinery__flex">
              <div className="refinery__box">
                <div className="refinery__text1">
                  <NumberFormat
                    value={rolls}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />
                </div>
                <div className="refinery__text2">
                  {" "}
                  <NumberFormat
                    value={rolls * price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </div>
                <div className="refinery__text3">Rolls</div>
              </div>
              <div className="refinery__box">
                <div className="refinery__text1">
                  {" "}
                  <NumberFormat
                    value={db}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />
                </div>
                <div className="refinery__text2">
                  {" "}
                  <NumberFormat
                    value={db * price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </div>
                <div className="refinery__text3">Level 1 Rewards</div>
              </div>
              <div className="refinery__box">
                <div className="refinery__text1">
                  {" "}
                  <NumberFormat
                    value={mb}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />
                </div>
                <div className="refinery__text2">
                  {" "}
                  <NumberFormat
                    value={mb * price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </div>
                <div className="refinery__text3">Level 2-15 Rewards</div>
              </div>
              <div className="refinery__box">
                <div className="refinery__text1">
                  {" "}
                  <NumberFormat
                    value={userAirdrop}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />
                </div>
                <div className="refinery__text2">
                  {" "}
                  <NumberFormat
                    value={userAirdrop * price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </div>
                <div className="refinery__text3">
                  Airdrop Received (After Tax)
                </div>
              </div>
              <div className="refinery__box">
                <div className="refinery__text1">
                  {" "}
                  <NumberFormat
                    value={userAirdrop2}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />
                </div>
                <div className="refinery__text2">
                  {" "}
                  <NumberFormat
                    value={userAirdrop2 * price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </div>
                <div className="refinery__text3">Airdrop Sent (After Tax)</div>
              </div>
              <div className="refinery__box">
                <div className="refinery__text1">
                  <NumberFormat
                    value={referrals}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />
                </div>
                <div className="refinery__text3">No. of Referrals</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
