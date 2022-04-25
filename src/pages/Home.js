import React, { useState, useEffect, useRef } from "react";
import { BigNumber, ethers } from "ethers";
import hfuel from "../utils/hfuel.json";
import axios from "axios";
import NumberFormat from "react-number-format";

export default function Home() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://speedy-nodes-nyc.moralis.io/40a88f8745bc01d3bb660792/bsc/mainnet"
  );

  const signer = provider.getSigner(
    "0x1443498Ef86df975D8A2b0B6a315fB9f49978998"
  );

  const hfuelContract = new ethers.Contract(
    "0xc8A79838D91f0136672b94ec843978B6Fa6DF07D",
    hfuel.abi,
    signer
  );

  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState(0);
  const [trx, setTrx] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [airdrop, setAirdrop] = useState(0);
  const [price, setPrice] = useState(0);
  const [wallet, setWallet] = useState("");
  const [userAirdrop, setUserAirDrop] = useState(0);
  const [userAirdrop2, setUserAirDrop2] = useState(0);

  const [available, setAvailable] = useState(0);
  const [userDeposit, setUserDeposit] = useState(0);
  const [claimed, setClaimed] = useState(0);
  const [maxPay, setMaxPay] = useState(0);
  const [upline, setUpline] = useState("");
  const [rolls, setRolls] = useState(0);
  const [refferals, setRefferals] = useState(0);
  const [db, setDb] = useState(0);
  const [mb, setMb] = useState(0);

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
        window.location.reload(true);
      }
    }
  };

  useEffect(() => {
    setWallet(localStorage.getItem("hwall"));
    const interval = setInterval(async () => {
      console.log("Logs every minute");

      const info = await hfuelContract.contractInfo();
      const detail = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=hfuel&vs_currencies=usd"
      );

      const users = await hfuelContract.users(wallet);
      const claimsAvailable = await hfuelContract.claimsAvailable(wallet);
      const max = await hfuelContract.payoutOf(wallet);
      const airdrop2 = await hfuelContract.airdrops(wallet);

      setAvailable(
        String((Number(BigNumber.from(claimsAvailable)) / 10 ** 18).toFixed(2))
      );
      setUserAirDrop(
        String(
          (
            Number(BigNumber.from(airdrop2.airdrops_received)) /
            10 ** 18
          ).toFixed(2)
        )
      );
      setUserAirDrop2(
        String(
          (Number(BigNumber.from(airdrop2.airdrops)) / 10 ** 18).toFixed(2)
        )
      );
      setUserDeposit(
        String((Number(BigNumber.from(users.deposits)) / 10 ** 18).toFixed(2))
      );
      setClaimed(
        String((Number(BigNumber.from(users.payouts)) / 10 ** 18).toFixed(2))
      );
      setRolls(
        String((Number(BigNumber.from(users.rolls)) / 10 ** 18).toFixed(2))
      );
      setRefferals(String(Number(BigNumber.from(users.referrals))));
      setDb(
        String(
          (Number(BigNumber.from(users.direct_bonus)) / 10 ** 18).toFixed(2)
        )
      );
      setMb(
        String(
          (Number(BigNumber.from(users.match_bonus)) / 10 ** 18).toFixed(2)
        )
      );
      setMaxPay(
        String((Number(BigNumber.from(max.max_payout)) / 10 ** 18).toFixed(2))
      );
      setUpline(String(users.upline));

      const usd = detail.data.hfuel.usd;
      setPrice(usd);
      setUsers(String(Number(BigNumber.from(info._total_users))));
      setTrx(String(Number(BigNumber.from(info._total_txs))));
      setDeposit(
        String(
          (Number(BigNumber.from(info._total_deposited)) / 10 ** 18).toFixed(2)
        )
      );
      setWithdraw(
        String(
          (Number(BigNumber.from(info._total_withdraw)) / 10 ** 18).toFixed(2)
        )
      );
      setAirdrop(
        String(
          (Number(BigNumber.from(info._total_airdrops)) / 10 ** 18).toFixed(2)
        )
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [wallet]);

  useEffect(() => {
    setWallet(localStorage.getItem("hwall"));

    (async () => {
      try {
        setLoading(true);
        const info = await hfuelContract.contractInfo();
        const detail = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=hfuel&vs_currencies=usd"
        );

        const users = await hfuelContract.users(wallet);
        const claimsAvailable = await hfuelContract.claimsAvailable(wallet);
        const max = await hfuelContract.payoutOf(wallet);
        const airdrop2 = await hfuelContract.airdrops(wallet);

        setAvailable(
          String(
            (Number(BigNumber.from(claimsAvailable)) / 10 ** 18).toFixed(2)
          )
        );
        setUserAirDrop(
          String(
            (
              Number(BigNumber.from(airdrop2.airdrops_received)) /
              10 ** 18
            ).toFixed(2)
          )
        );
        setUserAirDrop2(
          String(
            (Number(BigNumber.from(airdrop2.airdrops)) / 10 ** 18).toFixed(2)
          )
        );
        setUserDeposit(
          String((Number(BigNumber.from(users.deposits)) / 10 ** 18).toFixed(2))
        );
        setClaimed(
          String((Number(BigNumber.from(users.payouts)) / 10 ** 18).toFixed(2))
        );
        setRolls(
          String((Number(BigNumber.from(users.rolls)) / 10 ** 18).toFixed(2))
        );
        setRefferals(String(Number(BigNumber.from(users.referrals))));
        setDb(
          String(
            (Number(BigNumber.from(users.direct_bonus)) / 10 ** 18).toFixed(2)
          )
        );
        setMb(
          String(
            (Number(BigNumber.from(users.match_bonus)) / 10 ** 18).toFixed(2)
          )
        );
        setMaxPay(
          String((Number(BigNumber.from(max.max_payout)) / 10 ** 18).toFixed(2))
        );
        setUpline(String(users.upline));

        const usd = detail.data.hfuel.usd;
        setPrice(usd);
        setUsers(String(Number(BigNumber.from(info._total_users))));
        setTrx(String(Number(BigNumber.from(info._total_txs))));
        setDeposit(
          String(
            (Number(BigNumber.from(info._total_deposited)) / 10 ** 18).toFixed(
              2
            )
          )
        );
        setWithdraw(
          String(
            (Number(BigNumber.from(info._total_withdraw)) / 10 ** 18).toFixed(2)
          )
        );
        setAirdrop(
          String(
            (Number(BigNumber.from(info._total_airdrops)) / 10 ** 18).toFixed(2)
          )
        );
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, [wallet]);

  return (
    <div>
      <div className="hfuel__body">
        <div className="hfuel__header">
          <div>HFUEL OVERVIEW</div>
          <div>Fast ~ Reliable ~ Secure</div>
        </div>

        {loading === true ? (
          <div className="hfuel__section1">
            <div>loading.............</div>
          </div>
        ) : null}

        <section className="hfuel__section1">
          <div className="hfuel__headers">Wallet Manager</div>
          <div className="hfuel__wallet">
            {wallet ? wallet.slice(0, 5) + "....." + wallet.slice(-5, -1) : ""}
          </div>
          {wallet ? (
            <button
              className="hfuel-but"
              onClick={() => {
                localStorage.removeItem("hwall");
                window.location.reload(true);
              }}
            >
              Remove Wallet
            </button>
          ) : null}

          <div>
            <input
              className="hfuel__input"
              placeholder="Enter your wallet address"
              ref={walletRef}
              onChange={walletEnter}
            />
          </div>
        </section>

        <section className="hfuel__section2">
          <div className="hfuel__headers">Refinery</div>

          <div className="hfuel__contract">
            <div className="hfuel__inner__body">
              <div className="hfuel__head">Available</div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={available}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={available * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>
            <div className="hfuel__inner__body">
              <div className="hfuel__head">Deposited</div>
              <div className="hfuel__detail">
                {" "}
                <NumberFormat
                  value={userDeposit}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={userDeposit * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>
            <div className="hfuel__inner__body">
              <div className="hfuel__head">Claimed</div>
              <div className="hfuel__detail">
                {" "}
                <NumberFormat
                  value={claimed}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={claimed * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>
            <div className="hfuel__inner__body">
              <div className="hfuel__head">Max Payout</div>
              <div className="hfuel__detail">
                {" "}
                <NumberFormat
                  value={maxPay}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={maxPay * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>

            <div className="hfuel__inner__body">
              <div className="hfuel__head">Upline</div>
              <div
                className="hfuel__detail"
                style={{ textOverflow: "ellipsis" }}
              >
                {upline}
              </div>
            </div>

            <div className="hfuel__inner__body">
              <div className="hfuel__head">Rolls</div>
              <div className="hfuel__detail">{rolls}</div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={rolls * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>

            <div className="hfuel__inner__body">
              <div className="hfuel__head">Referrals</div>
              <div className="hfuel__detail">{refferals}</div>
            </div>

            <div className="hfuel__inner__body">
              <div className="hfuel__head">Direct Bonus</div>
              <div className="hfuel__detail">
                {" "}
                <NumberFormat
                  value={db}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={db * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>

            <div className="hfuel__inner__body">
              <div className="hfuel__head">Match Bonus</div>
              <div className="hfuel__detail">
                {" "}
                <NumberFormat
                  value={mb}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={mb * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>

            <div className="hfuel__inner__body">
              <div className="hfuel__head">AirDrop Received (After Tax)</div>
              <div className="hfuel__detail">
                {" "}
                <NumberFormat
                  value={userAirdrop}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={userAirdrop * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>

            <div className="hfuel__inner__body">
              <div className="hfuel__head">AirDrop Sent (After Tax)</div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={userAirdrop2}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={userAirdrop2 * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="hfuel__section2">
          <div className="hfuel__headers">Refinery Contract Statistics</div>

          <div className="hfuel__contract">
            <div className="hfuel__inner__body">
              <div className="hfuel__head">Users</div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={users}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </div>
            </div>
            <div className="hfuel__inner__body">
              <div className="hfuel__head">Transactions</div>
              <div className="hfuel__detail">
                {" "}
                <NumberFormat
                  value={trx}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </div>
            </div>
            <div className="hfuel__inner__body">
              <div className="hfuel__head">Deposited</div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={deposit}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={deposit * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>
            <div className="hfuel__inner__body">
              <div className="hfuel__head">Withdrawn</div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={withdraw}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={withdraw * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>
            <div className="hfuel__inner__body">
              <div className="hfuel__head">Airdrops</div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={airdrop}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
              </div>
              <div className="hfuel__detail">
                <NumberFormat
                  value={airdrop * price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div>KEEP IT DEFI</div>
          <div>
            <a href="https://t.me/keepitdefi" target="_blank" class="button">
              <small>Join our Community</small>
              <br />
              @KeepItDefi
            </a>
          </div>
          <div>All Rights Reserved 2022</div>
        </footer>
      </div>
    </div>
  );
}
