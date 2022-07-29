import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HorizontalTicker } from "react-infinite-ticker";
import NumberFormat from "react-number-format";
import axios from "axios";
export default function Footer() {
  const [copy, setCopy] = useState("");
  const [bitcoin, setBitcoin] = useState(0);
  const [eth, setEth] = useState(0);
  const [binance, setBinance] = useState("");
  useEffect(() => {
    const run = async () => {
      const detail = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
      );
      const detail2 = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
      );

      const detail3 = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd`
      );

      console.log(detail2);

      setBitcoin(detail.data.bitcoin.usd);
      setEth(detail2.data.ethereum.usd);
      setBinance(detail3.data.binancecoin.usd);
    };

    run();

    const interval = setInterval(run, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <hr className="footerhr" />
      <div className="footer-new">
        <div>
          <div className="footer-text1">Developed by KeepItDefi Team</div>
          <div className="footer-text2">
            &copy; 2022 KeepItDefi. All rights Reserved
          </div>
          <div className="social">
            <a
              href="https://twitter.com/keepitdefi?t=yuQQKMLiHCzhjmWL-tjptA&s=09"
              target="_blank"
              style={{ color: "white", cursor: "pointer" }}
              rel="noreferrer"
            >
              <img
                src="./images/twitter.svg"
                className="social-item"
                alt="ref"
              />
            </a>
            <a
              href="https://t.me/keepitdefi"
              target="_blank"
              style={{ color: "white", cursor: "pointer" }}
              rel="noreferrer"
            >
              <img
                src="./images/telegram.svg"
                className="social-item"
                alt="ref"
              />
            </a>
          </div>

          <CopyToClipboard
            text="0x1C7b949ab51f7d1a981d5b8AdB0CAb4D7Dd3C316"
            onCopy={() => {
              setCopy("0x1C7b949ab51f7d1a981d5b8AdB0CAb4D7Dd3C316");
              window.alert("Address copied to clipboard");
            }}
          >
            <div className="buy off" style={{ cursor: "pointer" }}>
              <img src="./images/cofeee.svg" className="" alt="ref" />
              <span style={{ paddingLeft: "10px" }}>Buy us a Coffee</span>
            </div>
          </CopyToClipboard>
        </div>
        <div className="footer2 off">
          <div>
            <Link to="/project" className="dec-none-white">
              <div className="footer-text4">Project</div>
            </Link>
            <Link to="/disclaimer" className="dec-none-white">
              <div className="footer-text4">Disclaimer</div>
            </Link>
            <div className="footer-text4">Terms</div>
            <Link to="/privacy" className="dec-none-white">
              <div className="footer-text4">Privacy Policy</div>
            </Link>
          </div>
          <Link
            to="//blog.keepitdefi.io/"
            target="_blank"
            className="dec-none-white"
          >
            <div className="footer-text3">Blog</div>
          </Link>
          <Link to="/contact" className="dec-none-white">
            <div className="footer-text3">Contact us</div>
          </Link>
          <img
            src="./images/pointer.svg"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            style={{ cursor: "pointer" }}
            alt="pointer"
            className="pointer"
          />
        </div>
        <div className="footer3 off2">
          <Link to="/project" className="dec-none-white">
            <div className="footer-text41">Project</div>
          </Link>
          <Link
            to="//blog.keepitdefi.io/"
            target="_blank"
            className="dec-none-white"
          >
            <div className="footer-text41">Blog</div>
          </Link>
          <Link to="/disclaimer" className="dec-none-white">
            <div className="footer-text41">Disclaimer</div>
          </Link>

          <div className="footer-text41">Terms</div>
          <Link to="/privacy" className="dec-none-white">
            <div className="footer-text41">Privacy Policy</div>
          </Link>

          <Link to="/contact" className="dec-none-white">
            <div className="footer-text41">Contact us</div>
          </Link>
          <CopyToClipboard
            text="0x1C7b949ab51f7d1a981d5b8AdB0CAb4D7Dd3C316"
            onCopy={() => {
              setCopy("0x1C7b949ab51f7d1a981d5b8AdB0CAb4D7Dd3C316");
              window.alert("Address copied to clipboard");
            }}
          >
            <div className="buy" style={{ cursor: "pointer" }}>
              <img src="./images/cofeee.svg" className="" alt="ref" />
              <span style={{ paddingLeft: "10px", fontSize: "16px" }}>
                Buy us a Coffee
              </span>
            </div>
          </CopyToClipboard>

          <img
            src="./images/pointer.svg"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            style={{ cursor: "pointer" }}
            alt="pointer"
            className="pointer"
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#2135EC", padding: "20px" }}>
        <HorizontalTicker easing="linear" duration={25000}>
          <div className="boxs">
            <img className="bitcoin" src="./images/btc.svg" alt="bitcoin" />
            <div style={{ padding: "10px" }}>Bitcoin (BTC)</div>
            <div style={{ paddingTop: "11px" }}>
              {" "}
              <NumberFormat
                value={bitcoin}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={4}
                prefix={"$"}
              />
            </div>
          </div>

          <div className="boxs">
            <img className="bitcoin" src="./images/eth.svg" alt="eth" />
            <div style={{ padding: "10px" }}>Ethereum (ETH)</div>
            <div style={{ paddingTop: "11px" }}>
              {" "}
              <NumberFormat
                value={eth}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={4}
                prefix={"$"}
              />
            </div>
          </div>
          <div className="boxs">
            <img className="bitcoin" src="./images/bnb.png" alt="eth" />
            <div style={{ padding: "10px" }}>Binance (BNB)</div>
            <div style={{ paddingTop: "11px" }}>
              {" "}
              <NumberFormat
                value={binance}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={4}
                prefix={"$"}
              />
            </div>
          </div>
        </HorizontalTicker>
      </div>
    </div>
  );
}
