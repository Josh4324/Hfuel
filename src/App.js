import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "./fire.css";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Stat from "./pages/Stat";
import Contract from "./pages/Contract";
import Teams from "./pages/Teams";
import Calculator from "./pages/Calculator";
import { BigNumber, ethers } from "ethers";
import hfuel from "./utils/hfuel.json";
import xhnw from "./utils/xhnw.json";
import xsk from "./utils/xsk.json";
import axios from "axios";
import Excel from "./pages/Excel";
import Stake from "./pages/Stake";

function App() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/"
  );

  const signer = provider.getSigner(
    "0x1443498Ef86df975D8A2b0B6a315fB9f49978998"
  );

  const hfuelContract = new ethers.Contract(
    "0xc8A79838D91f0136672b94ec843978B6Fa6DF07D",
    hfuel.abi,
    signer
  );

  const xhnwContract = new ethers.Contract(
    "0xaF4f67A1ed4fB3952ae3dF84ac2ca190E37a43F1",
    xhnw.abi,
    signer
  );
  const xskContract = new ethers.Contract(
    "0xA74Ce0F84d3F6dF9DAe2967a8Cfa645bF6693195",
    xsk.abi,
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
  const [hnw, setHNW] = useState(0);
  const [sk, setSK] = useState(0);

  useEffect(() => {
    setWallet(localStorage.getItem("hwall"));
    const interval = setInterval(async () => {
      console.log("Logs every minute");

      const info = await hfuelContract.contractInfo();
      const detail = await axios.get(
        "https://api.pancakeswap.info/api/v2/tokens/0x157Ba4bBbb2bd7D59024143C2C9E08f6060717a6"
      );

      console.log(detail);

      const users = await hfuelContract.users(wallet);
      const claimsAvailable = await hfuelContract.claimsAvailable(wallet);
      const max = await hfuelContract.payoutOf(wallet);
      const airdrop2 = await hfuelContract.airdrops(wallet);
      const hnw = await xhnwContract.balanceOf(wallet);
      console.log("hnw", hnw);
      const sk = await xskContract.balanceOf(wallet);

      setHNW(String((Number(BigNumber.from(hnw)) / 10 ** 18).toFixed(2)));

      setSK(String((Number(BigNumber.from(sk)) / 10 ** 18).toFixed(2)));

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

      const usd = detail.data.data.price;
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
          "https://api.pancakeswap.info/api/v2/tokens/0x157Ba4bBbb2bd7D59024143C2C9E08f6060717a6"
        );

        console.log(detail);

        const users = await hfuelContract.users(wallet);
        const claimsAvailable = await hfuelContract.claimsAvailable(wallet);
        const max = await hfuelContract.payoutOf(wallet);
        const airdrop2 = await hfuelContract.airdrops(wallet);

        const hnw = await xhnwContract.balanceOf(wallet);
        const sk = await xskContract.balanceOf(wallet);

        if (users && claimsAvailable && max && airdrop2 && hnw && sk) {
          setLoading(false);
        }

        setHNW(String((Number(BigNumber.from(hnw)) / 10 ** 18).toFixed(2)));

        setSK(String((Number(BigNumber.from(sk)) / 10 ** 18).toFixed(2)));

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

        const usd = detail.data.data.price;
        console.log(usd);
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
      } catch (err) {
        setLoading(false);
      }
    })();
  }, [wallet]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Wallet />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Dashboard
              available={available}
              price={price}
              deposit={userDeposit}
              claimed={claimed}
              maxPay={maxPay}
              sk={sk}
              hnw={hnw}
              loading={loading}
            />
          }
        />
        <Route
          exact
          path="/stat"
          element={
            <Stat
              upline={upline}
              price={price}
              rolls={rolls}
              referrals={refferals}
              db={db}
              mb={mb}
              userAirdrop={userAirdrop}
              userAirdrop2={userAirdrop2}
            />
          }
        />
        <Route
          exact
          path="/contract"
          element={
            <Contract
              deposit={deposit}
              withdraw={withdraw}
              airdrop={airdrop}
              price={price}
              users={users}
              trx={trx}
            />
          }
        />
        <Route exact path="/teams" element={<Teams />} />
        <Route exact path="/calc" element={<Calculator price={price} />} />
        <Route exact path="/excel" element={<Excel />} />
        <Route exact path="/stake" element={<Stake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
