import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import NumberFormat from "react-number-format";
import Footer from "./Footer";
import axios from "axios";

export default function Calculator({ price }) {
  const [deposit, setDeposit] = useState(0);
  const [aval, setAval] = useState(0);
  const [forecast, setForecast] = useState(0);
  const [refuel, setRefuel] = useState(0);
  const [available, setAvailable] = useState(0);
  const [claimed, setClaimed] = useState(0);
  const [xSK, setxSk] = useState(0);
  const [xHNW, setxHNW] = useState(0);
  const [bnb, setBnb] = useState(0);
  const [OutputTime, setOutputTime] = useState(0);
  const [toggle, setToggle] = useState(false);
  const percent = 0.05;
  const baseFee = 0.003327935;
  const maxFee = 0.00529409;

  const getPrice = async () => {
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
    );

    setBnb(data.data.binancecoin.usd);
  };

  const checkDaily = () => {
    const result =
      xSK < 400
        ? 0.008
        : xSK < 2000
        ? 0.009
        : xSK < 10000
        ? 0.01
        : xSK < 50000
        ? 0.011
        : 0.0122;
    return result;
  };

  useEffect(() => {
    getPrice();
  }, []);

  const compound = () => {
    let avail;
    let currentDeposit;
    let claimed1 = 0;
    let available1 = 0;
    let daily = checkDaily();
    currentDeposit = deposit - deposit * percent;

    let counter = 0;
    for (let i = 0; i < OutputTime; i++) {
      counter++;
      console.log(daily);
      avail = daily * currentDeposit;
      if (Number(refuel) === Number(counter)) {
        console.log("running");
        console.log(refuel);
        counter = 0;
        const Total = avail + available1;
        const percentV = Total * percent;
        const availableAfterTax = Total - percentV;
        console.log("DAY", i);
        console.log(avail);
        console.log(availableAfterTax);
        currentDeposit = availableAfterTax + currentDeposit;
        console.log(currentDeposit);
        claimed1 = claimed1 + avail;
        available1 = 0;
      } else {
        console.log("DAY", i);
        console.log(i, "---", avail);
        available1 = avail + available1;
      }
    }

    console.log(available1);
    console.log(currentDeposit);
    setAval(available1);
    setForecast(currentDeposit);
  };

  const changeNav = () => {
    setToggle(!toggle);
  };

  return (
    <div
      style={{
        backgroundImage: `url("./images/bg5.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className="dash">
        <Sidebar toggle={toggle} />
        <div>
          <div className="refinery2">
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
            <div className="refinery__stat2">
              <div className="refinery__stat">
                <div style={{ paddingRight: "10px" }}>
                  Easy way to calculate your earnings
                </div>{" "}
                <div className="flame"></div>
              </div>
              <div className="refinery__text4">
                HFUEL / BUSD :{" "}
                <NumberFormat
                  value={price}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={4}
                />
              </div>
            </div>

            <div className="refinery__flex1">
              <div className="refinery__flex1__box">
                <div className="cal__box">
                  <div className="refinery_flex1_text1">Initial Deposit</div>
                  <input
                    className="refinery_flex1_input"
                    placeholder="0.00 Hfuel"
                    onChange={(evt) => {
                      setDeposit(evt.target.value);
                      setForecast(0);
                      setAval(0);
                    }}
                  />
                </div>
                <div className="cal__box">
                  <div className="refinery_flex1_text1">Output Period</div>
                  <input
                    className="refinery_flex1_input"
                    placeholder="0"
                    onChange={(evt) => {
                      setOutputTime(evt.target.value);
                      setForecast(0);
                      setAval(0);
                    }}
                  />
                </div>
                <div className="cal__box">
                  <div className="refinery_flex1_text1">Refuel Periods</div>
                  <input
                    className="refinery_flex1_input"
                    placeholder="0"
                    onChange={(evt) => {
                      setRefuel(evt.target.value);
                      setForecast(0);
                      setAval(0);
                    }}
                  />
                </div>
                {/* <div className="cal__box">
                  <div className="refinery_flex1_text1">xHNW</div>
                  <input
                    className="refinery_flex1_input"
                    placeholder="0.00 Hfuel"
                    onChange={(evt) => setxHNW(evt.target.value)}
                  />
                </div> */}
                <div className="cal__box">
                  <div className="refinery_flex1_text1">xSK</div>
                  <input
                    className="refinery_flex1_input"
                    placeholder="0.00 xSK"
                    onChange={(evt) => {
                      setxSk(evt.target.value);
                      setForecast(0);
                      setAval(0);
                    }}
                  />
                </div>

                <button
                  className="cal-but"
                  onClick={() => {
                    compound();
                  }}
                >
                  Calculate
                </button>
              </div>
              <div className="refinery__flex2__box">
                <div className="cal__box2">
                  <div className="refinery_flex1_text2">{deposit} Hfuel</div>
                  <div className="refinery_flex1_text3">
                    After Tax - {deposit - deposit * percent} Hfuel
                  </div>
                  <div className="refinery_flex1_text3">
                    <NumberFormat
                      value={deposit * price}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                      prefix={"$"}
                    />
                  </div>
                  <div className="refinery_flex1_text4">Initial Deposit</div>
                </div>

                <div className="cal__box2">
                  <div className="refinery_flex1_text2">{OutputTime} days</div>
                  <div className="refinery_flex1_text4">Output period</div>
                </div>

                <div className="cal__box2">
                  <div className="refinery_flex1_text2">{refuel} days</div>
                  <div className="refinery_flex1_text4">Refuel Periods</div>
                </div>

                <div className="cal__box2">
                  <div className="refinery_flex1_text2">
                    {xSK < 400
                      ? "0.8%"
                      : xSK < 2000
                      ? "0.9%"
                      : xSK < 10000
                      ? "1%"
                      : xSK < 50000
                      ? "1.1%"
                      : "1.2%"}
                  </div>
                  <div className="refinery_flex1_text4">Daily Return</div>
                </div>

                <div className="cal__box2">
                  <div className="refinery_flex1_text2">
                    {" "}
                    Min -{" "}
                    <NumberFormat
                      value={baseFee * (OutputTime / refuel)}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                    />
                    bnb || Max -{" "}
                    <NumberFormat
                      value={maxFee * (OutputTime / refuel)}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                    />
                    bnb
                  </div>
                  <div className="refinery_flex1_text3">
                    Min -{" "}
                    <NumberFormat
                      value={baseFee * bnb * (OutputTime / refuel)}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                      prefix={"$"}
                    />{" "}
                    || Max -{" "}
                    <NumberFormat
                      value={maxFee * bnb * (OutputTime / refuel)}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                      prefix={"$"}
                    />{" "}
                  </div>
                  <div className="refinery_flex1_text4">Estimated Gas Fees</div>
                </div>
                <div className="cal__box2">
                  <div className="refinery_flex1_text2">
                    {" "}
                    <NumberFormat
                      value={aval}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                    />{" "}
                    Hfuel
                  </div>
                  <div className="refinery_flex1_text3">
                    {" "}
                    <NumberFormat
                      value={aval * price}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                      prefix={"$"}
                    />
                  </div>
                  <div className="refinery_flex1_text4">Available</div>
                </div>
                <div className="cal__box2">
                  <div className="refinery_flex1_text2">
                    {" "}
                    <NumberFormat
                      value={forecast}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                    />{" "}
                    Hfuel
                  </div>
                  <div className="refinery_flex1_text3">
                    {" "}
                    Percent Increase -
                    <NumberFormat
                      value={
                        ((forecast - (deposit - deposit * percent)) /
                          (deposit - deposit * percent)) *
                        100
                      }
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                    />
                    %
                  </div>
                  <div className="refinery_flex1_text3">
                    {" "}
                    <NumberFormat
                      value={forecast * price}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                      prefix={"$"}
                    />
                  </div>
                  <div className="refinery_flex1_text4">Forecasted Deposit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
