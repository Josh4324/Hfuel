import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import NumberFormat from "react-number-format";
import Footer from "./Footer";
import hfuel from "../utils/stake.json";
import readXlsxFile from "read-excel-file";
import writeXlsxFile from "write-excel-file";
import { BigNumber, ethers } from "ethers";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Stake() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const excelRef = useRef();
  const changeNav = () => {
    setToggle(!toggle);
  };
  const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/"
  );

  const signer = provider.getSigner(
    "0x1443498Ef86df975D8A2b0B6a315fB9f49978998"
  );

  const getContract = new ethers.Contract(
    "0x429d2591387d730379d2E2cdf3cD1BC4BD438CF4",
    hfuel.abi,
    signer
  );

  useEffect(() => {
    const wallet = localStorage.getItem("hwall");
    if (!wallet) {
      window.location.href = "/";
    }
  }, []);
  const ex = async (evt) => {
    setError("");
    if (!excelRef.current.files[0]) {
      return setError("Please choose an excel file");
    }
    evt.preventDefault();
    try {
      setLoading(true);
      let allData = [];

      let filename = uuidv4();

      let dfile = filename + ".xlsx";

      let track = [];

      const schema = [
        // Column #1
        {
          column: "Name",
          type: String,
          value: (item) => item.name,
        },
        {
          column: "Username",
          type: String,
          value: (item) => item.username,
        },
        {
          column: "Chain",
          type: String,
          value: (item) => item.chain,
        },
        {
          column: "Wallet",
          type: String,
          value: (item) => item.wallet,
        },
        {
          column: "Deposit",
          type: String,
          value: (item) => item.deposit_cr,
        },
        {
          column: "Initial airdrop sent?",
          type: String,
          value: (item) => item.initial_airdrop,
        },
        // Column #2
        {
          column: "Available",
          type: String,
          value: (item) => item.claims,
        },
        // Column #3
        {
          column: "Deposits",
          type: String,
          value: (item) => item.deposits,
        },
        {
          column: "7% of Deposits",
          type: String,
          value: (item) => item.percent,
        },
        {
          column: "Faucet Claims",
          type: String,
          value: (item) => item.faucetClaims,
        },
        // Column #4
        {
          column: "Rebase Claims",
          type: String,
          value: (item) => item.rebaseClaims,
        },

        {
          column: "Payout",
          type: String,
          value: (item) => item.payouts,
        },
        {
          column: "My Airdrop",
          type: String,
          value: (item) => item.my_airdrop,
        },
        {
          column: "Airdrop Received",
          type: String,
          value: (item) => item.airdrop_received,
        },
        {
          column: "Rolls Ratio",
          type: String,
          value: (item) => item.rolls_ratio,
        },
        {
          column: "Upline",
          type: String,
          value: (item) => item.upline,
        },
        {
          column: "Referrals",
          type: String,
          value: (item) => item.referrals,
        },
        /*  {
              column: "Downliners",
              type: String,
              value: (item) => item.down,
            }, */
      ];

      let addrList = [];
      readXlsxFile(excelRef.current.files[0]).then(async (rows) => {
        //console.log(rows);
        rows.map((item, index) => {
          if (index > 0) {
            addrList.push({
              name: item[0],
              username: item[1],
              chain: item[2],
              wallet: item[3],
              deposit_cr: item[4],
              initial_airdrop: item[5],
            });
          }
        });
        console.log(addrList);
        addrList.map((item, index) => {
          (async () => {
            try {
              const accounting = await getContract.accounting(item.wallet);
              const team = await getContract.team(item.wallet);

              const dep =
                Number(BigNumber.from(accounting.deposits)) / 10 ** 18;

              const seven = dep * 0.07;
              console.log(seven);
              console.log(accounting);
              console.log(team);

              const obj = {
                name: item.name,
                username: item.username,
                chain: item.chain,
                wallet: item.wallet,
                deposit_cr: String(item.deposit_cr),
                initial_airdrop: item.initial_airdrop,

                deposits: String(
                  Number(BigNumber.from(accounting.deposits)) / 10 ** 18
                ),

                percent: String(seven),

                airdrop_received: String(
                  Number(BigNumber.from(accounting.airdrops_rcv)) / 10 ** 18
                ),

                //claims: String(Number(BigNumber.from(claims)) / 10 ** 18),
                faucetClaims: String(
                  Number(BigNumber.from(accounting.faucetClaims)) / 10 ** 18
                ),
                rebaseClaims: String(
                  Number(BigNumber.from(accounting.rebaseClaims)) / 10 ** 18
                ),
                referrals: String(team.referrals),
                upline: String(team.upline),
              };

              allData.push(obj);
              track.push(index);

              if (track.length === addrList.length) {
                setLoading(false);
                await writeXlsxFile(allData, {
                  schema,
                  fileName: dfile,
                });
              }
            } catch (err) {
              console.log(err);
              setLoading(false);
              setError(
                "An error occured, please try again, if error persists, reduce number of records"
              );
            }

            //const down = await axios.get(`https://api.drip.community/org/${item}`);

            //console.log(users);
          })();
        });
      });
    } catch (err) {
      setLoading(false);
      setError("An error has occured");
    }
  };
  return (
    <div>
      <div
        className="dash"
        style={{
          backgroundImage: `url("./images/bg3.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
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
              <div style={{ paddingRight: "10px" }}>STAKE BATCH CONVERTER</div>{" "}
              <div className="flame"></div>
            </div>

            <div style={{ color: "white", marginBottom: "30px" }}>
              {loading === true ? "loading....." : ""}
            </div>
            <div style={{ color: "red", marginBottom: "10px" }}>
              {error.length > 0 ? error : ""}
            </div>

            <div className="">
              <input
                style={{ color: "white" }}
                type="file"
                name="upload"
                id="upload"
                ref={excelRef}
              />

              <button
                style={{ display: "block" }}
                className="mt-4 button1"
                onClick={ex}
                variant="warning"
              >
                Batch Convert
              </button>
              <div style={{ color: "white", marginTop: "30px" }}>
                <div>Download Expected Excel File Sample</div>
                <div>
                  <a
                    style={{ color: "red" }}
                    href="https://res.cloudinary.com/josh4324/raw/upload/v1651676861/data_lffcso.xlsx"
                  >
                    Sample Excel File
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
