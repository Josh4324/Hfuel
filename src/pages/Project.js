import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Project() {
  const scrollRef = useRef();

  const rightScroll = () => {
    const current = scrollRef.current.scrollLeft;
    let track = 0;

    if (current === 0) {
      track = 0;
      scrollRef.current.scroll(track, 0, { behavior: "smooth" });
    } else {
      scrollRef.current.scroll(current - 1000, 0, { behavior: "smooth" });
    }
  };

  const leftScroll = () => {
    const current = scrollRef.current.scrollLeft;
    scrollRef.current.scroll(current + 1000, 0, { behavior: "smooth" });
  };
  return (
    <div>
      <Header />

      <main>
        <section className="project-section1">
          <div className="project-section1-text">Vetted Projects</div>
          <div className="project-section1-text2">
            You only have an asset when the value of your principal investment
            and/or its quantity appreciates over time. <br />
            <br /> But for every successful investment, sustainability and trust
            is key. That is why we at KeepitDeFi do the hard work to vet
            projects before presenting it to our community.
          </div>
        </section>

        <section className="project-section2">
          <div className="project-list" ref={scrollRef}>
            <div className="project-box">
              <div>
                <img src="./images/drip.png" className="project" alt="ref" />
              </div>
              <div className="project-section2-text1">Drip</div>

              <div className="project-section2-text2">
                <a
                  href="https://drip.community/"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  Drip.community
                  <img src="./images/point.svg" className="" alt="ref" />
                </a>
              </div>
            </div>
            <div className="project-box">
              <div>
                <img src="./images/farm.png" className="project" alt="ref" />
              </div>
              <div className="project-section2-text1">Animal Farm</div>
              <div className="project-section2-text2">
                <a
                  href="https://animalfarm.app/"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  AnimalFarm.app
                  <img src="./images/point.svg" className="" alt="ref" />
                </a>
              </div>
            </div>
            <div className="project-box">
              <div>
                <img src="./images/hfuel.png" className="project" alt="ref" />
              </div>
              <div className="project-section2-text1">Hfuel Refinery</div>
              <div className="project-section2-text2">
                <a
                  href="https://hnwdefi.com/"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  app.hnwdefi.com
                  <img src="./images/point.svg" className="" alt="ref" />
                </a>
              </div>
            </div>
            <div className="project-box">
              <div>
                <img src="./images/stake.png" className="project" alt="ref" />
              </div>
              <div className="project-section2-text1">Stake Protocol</div>
              <div className="project-section2-text2">
                <a
                  href="https://stakeprotocol.app/"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  stakeprotocol.app
                  <img src="./images/point.svg" className="" alt="ref" />
                </a>
              </div>
            </div>
            <div className="project-box">
              <div>
                <img src="./images/rex.png" className="project" alt="ref" />
              </div>
              <div className="project-section2-text1">Rex</div>
              <div className="project-section2-text2">
                <a
                  href="https://rex.io/"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  rex.io
                  <img src="./images/point.svg" className="" alt="ref" />
                </a>
              </div>
            </div>
            <div className="project-box">
              <div>
                <img src="./images/bankx.png" className="project" alt="ref" />
              </div>
              <div className="project-section2-text1">BankX</div>
              <div className="project-section2-text2">
                <a
                  href="https://bankx.io/"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  BankX.io
                  <img src="./images/point.svg" className="" alt="ref" />
                </a>
              </div>
            </div>
            <div className="project-box">
              <div>
                <img src="./images/Avarice.png" className="project" alt="ref" />
              </div>
              <div className="project-section2-text1">Avarice</div>
              <div className="project-section2-text2">
                <a
                  href="https://avaricetoken.io/"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  avaricetoken.io
                  <img src="./images/point.svg" className="" alt="ref" />
                </a>
              </div>
            </div>
          </div>
          <div className="arrow off">
            <img
              src="./images/arrow1.svg"
              style={{ cursor: "pointer" }}
              className=""
              alt="ref"
              onClick={rightScroll}
            />
            <img
              style={{ cursor: "pointer" }}
              src="./images/arrow2.svg"
              className=""
              onClick={leftScroll}
              alt="ref"
            />
          </div>
        </section>
        <section className="home-section6">
          <div className="home-section61">
            <div className="home-section6-text1">
              Be part of the fastest growing community
            </div>
            <div className="home-section6-text2">
              Connect with use across all our platforms to be a part of the
              fastest growing DeFi community. Let our crypto communities direct
              you to financial freedom.
            </div>
          </div>
          <div className="home-section62">
            <div className="home-section6-inner">
              <div>
                <img src="./images/twitter.svg" className="sc" alt="ref" />
              </div>
              <div className="home-section6-box">
                <div className="home-section6-text3">KiD Twitter</div>
                <div className="home-section6-text4">
                  We tweet harmoniously like birds. Never miss an update from us
                  on Twitter
                </div>
              </div>
            </div>
            <div className="home-section6-inner">
              <div>
                <img src="./images/telegram.svg" className="sc" alt="ref" />
              </div>
              <div className="home-section6-box">
                <div className="home-section6-text3">KiD Telegram</div>
                <div className="home-section6-text4">
                  Engage and participate in interesting conversations.
                  Learn,connect and grow with us
                </div>
              </div>
            </div>
            <div className="home-section6-inner">
              <div>
                <img src="./images/telegram.svg" className="sc" alt="ref" />
              </div>
              <div className="home-section6-box">
                <div className="home-section6-text3">Baker Decentraciti</div>
                <div className="home-section6-text4">
                  A community to connect the physical and virtual worlds through
                  Real Estate
                </div>

                <div className="home-section6-text5 ">Coming Soon</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
