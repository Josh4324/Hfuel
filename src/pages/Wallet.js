import React, { useRef, useEffect } from "react";
import { BigNumber, ethers } from "ethers";

export default function Wallet() {
  const walletRef = useRef("");

  const walletEnter = () => {
    let wall = walletRef.current.value;
    if (wall.length === 42) {
      if (ethers.utils.isAddress(wall) === false) {
        window.alert("Incorrect wallet address");
      } else {
        localStorage.setItem("hwall", wall);
        walletRef.current.value = "";
        window.alert("Wallet Address Updated");
        window.location.href = "/hfuel";
      }
    }
  };

  useEffect(() => {
    const wallet = localStorage.getItem("hwall");
    if (wallet) {
      window.location.href = "/hfuel";
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("./images/bg3.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="wallet">
        <img src="./images/ref.svg" className="wallet__logo" alt="ref" />

        <div className="wallet__kid">Keep it DEFI </div>
        <div className="wallet__ref ">Refinery Chain</div>
        <div className="wallet__box">
          <div className="wallet__inner">
            <div className="wallet__check">Wallet Check</div>
            <div>
              <input
                className="wallet__input"
                ref={walletRef}
                onChange={walletEnter}
                placeholder="Enter your wallet address"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
