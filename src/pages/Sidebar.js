import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ toggle }) {
  const [nav, setNav] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/hfuel-stat") {
      setNav("stat");
    } else if (window.location.pathname === "/hfuel-contract") {
      setNav("contract");
    } else if (window.location.pathname === "/hfuel-teams") {
      setNav("teams");
    } else if (window.location.pathname === "/hfuel") {
      setNav("dash");
    } else if (window.location.pathname === "/hfuel-calc") {
      setNav("calc");
    }
  }, []);

  return (
    <div>
      <div
        className={
          toggle === true ? "dash__box animation1" : "dash__box animation2"
        }
      >
        <div>
          <img src="./images/ref.svg" className="none" alt="ref" />
        </div>
        <NavLink
          to="/hfuel"
          className={(navigationData) =>
            navigationData.isActive ? "active1" : "active2"
          }
        >
          <div className="nav-item">
            <div>
              <img
                src={
                  nav === "dash" ? "./images/icon1.svg" : "./images/icon11.svg"
                }
                alt="ref"
              />
            </div>
            <div>Refinery</div>
          </div>
        </NavLink>

        <NavLink
          to="/hfuel-stat"
          className={(navigationData) =>
            navigationData.isActive ? "active1" : "active2"
          }
        >
          <div className="nav-item">
            <div>
              <img
                src={
                  nav === "stat" ? "./images/stat2.svg" : "./images/stat.svg"
                }
                alt="ref"
              />
            </div>
            <div>Stats</div>
          </div>
        </NavLink>

        <NavLink
          to="/hfuel-contract"
          className={(navigationData) =>
            navigationData.isActive ? "active1" : "active2"
          }
        >
          <div className="nav-item">
            <div>
              <img
                src={
                  nav === "contract"
                    ? "./images/icon33.svg"
                    : "./images/icon3.svg"
                }
                alt="ref"
              />
            </div>
            <div>Contract Stats</div>
          </div>
        </NavLink>
        {/*   <NavLink
          to="/teams"
          className={(navigationData) =>
            navigationData.isActive ? "active1" : "active2"
          }
        >
          <div className="nav-item">
            <div>
              <img
                src={
                  nav === "teams" ? "./images/icon44.svg" : "./images/icon4.svg"
                }
                alt="ref"
              />
            </div>
            <div>Teams</div>
          </div>
        </NavLink> */}
        <NavLink
          to="/hfuel-calc"
          className={(navigationData) =>
            navigationData.isActive ? "active1" : "active2"
          }
        >
          <div className="nav-item">
            <div>
              <img
                src={nav === "calc" ? "./images/c.svg" : "./images/c11.svg"}
                alt="ref"
              />
            </div>
            <div>Calculator</div>
          </div>
        </NavLink>
        <div className="nav-item">
          <div>
            <img src="./images/del.svg" alt="ref" />
          </div>
          <div
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => {
              localStorage.removeItem("hwall");
              window.location.href = "/";
            }}
          >
            Remove Address
          </div>
        </div>
      </div>
    </div>
  );
}
