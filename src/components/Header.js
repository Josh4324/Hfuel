import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Header() {
  const [navState, setNavState] = useState(false);
  const [copy, setCopy] = useState("");

  const changeNav = () => {
    setNavState(!navState);
  };
  return (
    <div className="header">
      <Link to="/" className="dec-none-white">
        <img src="../images/kid.svg" alt="" className="kid" />
      </Link>
      <div
        className={
          navState === true
            ? "header-inner animation1"
            : "header-inner animation2"
        }
      >
        <Link to="/project" className="dec-none-white navitem">
          <div>Projects</div>
        </Link>
        <Link
          to="//blog.keepitdefi.io/"
          target="_blank"
          className="dec-none-white navitem"
        >
          <div>Blog</div>
        </Link>
        <Link to="/contact" className="dec-none-white navitem">
          <div>Contact us</div>
        </Link>
        <CopyToClipboard
          text="0x1C7b949ab51f7d1a981d5b8AdB0CAb4D7Dd3C316"
          onCopy={() => {
            setCopy("0x1C7b949ab51f7d1a981d5b8AdB0CAb4D7Dd3C316");
            window.alert("Address copied to clipboard");
          }}
        >
          <button className="hbutton off2">
            {" "}
            <img src="./images/cofeee.svg" className="" alt="ref" />
            <span style={{ paddingLeft: "10px" }}>Buy us a Coffee</span>
          </button>
        </CopyToClipboard>
        <img
          alt="navchange"
          className="close off2"
          src="./images/close.svg"
          onClick={changeNav}
        />
      </div>
      <img
        className="ham off2"
        src="./images/ham1.svg"
        alt="nav"
        onClick={changeNav}
      />
      <CopyToClipboard
        text="0x1C7b949ab51f7d1a981d5b8AdB0CAb4D7Dd3C316"
        onCopy={() => {
          setCopy("0x1C7b949ab51f7d1a981d5b8AdB0CAb4D7Dd3C316");
          window.alert("Address copied to clipboard");
        }}
      >
        <button className="hbutton off">
          {" "}
          <img src="./images/cofeee.svg" className="" alt="ref" />
          <span style={{ paddingLeft: "10px" }}>Buy us a Coffee</span>
        </button>
      </CopyToClipboard>
    </div>
  );
}
