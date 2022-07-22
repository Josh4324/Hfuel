import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <Link to="/" className="dec-none-white">
        <div className="logo">Keepitdefi</div>
        <img src="../images/kid.png" alt="" className="kid" />
      </Link>

      <div>
        <img src="../images/401.png" alt="notfound" className="notf" />
      </div>
      <div className="notf-text1">
        Oh no! Seems the page you’re trying to access doesn’t exist
      </div>
      <div>
        <Link to="/" className="dec-none-white">
          <button className="notf-but">
            {" "}
            <img src="../images/narrow.svg" alt="notfound" className="" />
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
}
