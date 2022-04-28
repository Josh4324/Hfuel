import React from "react";
import Sidebar from "./Sidebar";

export default function Teams() {
  return (
    <div>
      <div
        className="dash"
        style={{
          backgroundImage: `url("./images/bg3.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <Sidebar />
        <div>
          <div className="refinery">
            <div style={{ marginLeft: "10%" }} className="refinery__stat">
              <div style={{ paddingRight: "10px" }}>Teams</div>{" "}
              <div className="flame"></div>
            </div>
            <div style={{ marginLeft: "10%" }} className="refinery__text4">
              HFUEL / BUSD : 9.32
            </div>
            <div className="refinery__flex2">
              <div className="refinery__box4">
                <div className="refinery__text2">
                  {" "}
                  <img src="./images/path.svg" alt="ref" />
                </div>
                <div className="refinery__text32">Volcano</div>
              </div>
              <div className="refinery__box4">
                <div className="refinery__text2">
                  {" "}
                  <img src="./images/path.svg" alt="ref" />
                </div>
                <div className="refinery__text32">Combustion</div>
              </div>
              <div className="refinery__box4">
                <div className="refinery__text2">
                  {" "}
                  <img src="./images/path.svg" alt="ref" />
                </div>
                <div className="refinery__text32">Microwave</div>
              </div>
            </div>
            <div className="refinery__flex">
              <div className="refinery__box3">
                <div className="refinery__text1">2,354</div>
                <div className="refinery__text2">$3,000</div>
                <div className="refinery__text3">Airdrops Sent</div>
              </div>
              <div className="refinery__box3">
                <div className="refinery__text1">2,354</div>
                <div className="refinery__text2">$3,000</div>
                <div className="refinery__text3">No. of Team Members</div>
              </div>
              <div className="refinery__box3">
                <div className="refinery__text1">2,354</div>
                <div className="refinery__text2">$3,000</div>
                <div className="refinery__text3">Total Team Token</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
