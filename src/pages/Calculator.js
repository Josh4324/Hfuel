import React from "react";
import Sidebar from "./Sidebar";

export default function Calculator() {
  return (
    <div>
      <div
        className="dash"
        style={{
          backgroundImage: `url("./images/bg5.png")`,
          backgroundSize: "cover",
        }}
      >
        <Sidebar />
        <div>
          <div className="refinery">
            <div className="refinery__stat">
              <div style={{ paddingRight: "10px" }}>Contract Stats</div>{" "}
              <div className="flame"></div>
            </div>
            <div className="refinery__text4">HFUEL / BUSD : 9.32</div>
            <div className="refinery__flex">
              <div className="refinery__box2">
                <div className="refinery__img">
                  <img
                    src="./images/c1.svg"
                    style={{ width: "100%" }}
                    alt="ref"
                  />
                </div>
                <div className="refinery__text11">2,354 </div>
                <div className="refinery__text21">$3,000</div>
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
                <div className="refinery__text11">2,354 </div>
                <div className="refinery__text21">$3,000</div>
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
                <div className="refinery__text11">2,354</div>
                <div className="refinery__text21">$3,000</div>
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
                <div className="refinery__text11">2,354 </div>
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
                <div className="refinery__text11">2,354</div>
                <div className="refinery__text31">Transactions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
