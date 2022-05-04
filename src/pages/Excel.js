import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import NumberFormat from "react-number-format";
import Footer from "./Footer";
import hfuel from "../utils/hfuel.json";
import readXlsxFile from "read-excel-file";
import writeXlsxFile from "write-excel-file";
import { BigNumber, ethers } from "ethers";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Excel() {
  const [toggle, setToggle] = useState(false);
  const excelRef = useRef();
  const changeNav = () => {
    setToggle(!toggle);
  };
  const provider = new ethers.providers.JsonRpcProvider(
    "https://speedy-nodes-nyc.moralis.io/40a88f8745bc01d3bb660792/bsc/mainnet"
  );

  const signer = provider.getSigner(
    "0x1443498Ef86df975D8A2b0B6a315fB9f49978998"
  );

  const getContract = new ethers.Contract(
    "0xc8A79838D91f0136672b94ec843978B6Fa6DF07D",
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
    evt.preventDefault();
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
        column: "Claims",
        type: String,
        value: (item) => item.claims,
      },
      // Column #3
      {
        column: "Deposits",
        type: String,
        value: (item) => item.deposits,
      },
      // Column #4
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
          const claims = await getContract.claimsAvailable(item.wallet);
          const result2 = await getContract.userInfo(item.wallet);
          const airdrop = await getContract.airdrops(item.wallet);
          const users = await getContract.users(item.wallet);
          //const down = await axios.get(`https://api.drip.community/org/${item}`);

          //console.log(users);

          let ratio = String(
            Number(BigNumber.from(users.rolls)) /
              10 ** 18 /
              (Number(BigNumber.from(result2.payouts)) / 10 ** 18 -
                Number(BigNumber.from(users.rolls)) / 10 ** 18)
          );
          /* 
            if (down.data.children) {
              down.data.children.map((item) => {
                lines.push(item.id);
              });
            } else {
              lines.push("");
            } */

          const obj = {
            name: item.name,
            username: item.username,
            chain: item.chain,
            wallet: item.wallet,
            deposit_cr: String(item.deposit_cr),
            initial_airdrop: item.initial_airdrop,
            claims: String(Number(BigNumber.from(claims)) / 10 ** 18),
            deposits: String(
              Number(BigNumber.from(result2.deposits)) / 10 ** 18
            ),
            payouts: String(Number(BigNumber.from(result2.payouts)) / 10 ** 18),
            my_airdrop: String(
              Number(BigNumber.from(airdrop.airdrops)) / 10 ** 18
            ),
            airdrop_received: String(
              Number(BigNumber.from(airdrop.airdrops_received)) / 10 ** 18
            ),
            rolls_ratio: ratio,
            //down: lineText,
            upline: String(users.upline),
          };

          allData.push(obj);
          track.push(index);

          if (track.length === addrList.length) {
            await writeXlsxFile(allData, {
              schema,
              fileName: dfile,
            });
          }
        })();
      });

      /* const dt = await axios.post("http://localhost:4000/drip/file", {
        addList: addrList,
      }); */
      /*  console.log(dt.data.name);
      const a = document.createElement("a");
      a.href = `http://localhost:4000${dt.data.name}`;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click(); */
    });
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
              <div style={{ paddingRight: "10px" }}>HFUEL BATCH CONVERTER</div>{" "}
              <div className="flame"></div>
            </div>

            <div className="">
              <div>
                <label className="" style={{ color: "white" }}>
                  Wallet Addresses Excel File
                </label>
              </div>

              <input
                style={{ color: "white" }}
                type="file"
                name="upload"
                id="upload"
                ref={excelRef}
              />

              <button
                style={{ display: "block" }}
                className="mt-4"
                onClick={ex}
                variant="warning"
              >
                Batch Convert
              </button>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}