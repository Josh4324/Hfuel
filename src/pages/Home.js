import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home1() {
  return (
    <div>
      <Header />
      <main>
        <section className="home-section1">
          <div className="home-section1-head">
            Your Journey to Financial Freedom
          </div>
          <div className="home-section1-text">
            Welcome to KeepItDefi! The home for vetted and trusted DEFI
            projects.
          </div>
          <div>
            <img src="./images/v1.svg" className="pattern" alt="ref" />
          </div>
        </section>
        <section className="home-section2">
          <div className="home-section2-inner">
            <div>
              {" "}
              <img src="./images/line1.svg" className="line" alt="ref" />
            </div>
            <div className="home-section2-main">
              <div className="home-section2-text1">Who We Are</div>
              <div className="home-section2-text2">
                A growing community of DeFi Enthusiasts & Experts
              </div>
              <div className="home-section2-main-inner">
                <div className="home-section2-text3">
                  With over 860+ active members, KeepItDefi remains one of Top
                  10 safe communities for DEFI Enthusiasts and Experts. The
                  crypto market is volatile, so we do our best to provide
                  low-risk projects that put everyone on the safe side where
                  they can grow from point 0 to financial freedom.
                </div>
                <div>
                  <div className="home-section2-text4">Community Members</div>
                  <div className="home-section2-text5">860+</div>
                </div>
              </div>
              <div className="prod">
                <div>
                  <div className="home-section2-text1">Products</div>
                  <div className="home-section2-text5">3+</div>
                </div>
                <div>
                  <div className="home-section2-text1">Users</div>
                  <div className="home-section2-text5">700+</div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img src="./images/line2.svg" className="line" alt="ref" />
            </div>
          </div>
          <div className="home-card">
            <div>
              {" "}
              <img src="./images/line3.svg" className="line" alt="ref" />
            </div>
            <div className="card1">
              <div className="home-section2-text6">Our Ethics</div>
              <div className="home-section2-text7">
                Communoty First! We keep things simple and strictly DeFi. We
                only engage with vetted projects, frown from fudding and play by
                the community guidelines
              </div>
            </div>
            <div className="card2">
              <div className="home-section2-text6">Our Mission</div>
              <div className="home-section2-text7">
                Our mission at KeepItDefi is to build a strong community where
                everyone can work together to build their way into financial
                freedom.
              </div>
            </div>
            <div>
              {" "}
              <img src="./images/line4.svg" className="line" alt="ref" />
            </div>
          </div>
        </section>
        <section className="home-section3">
          <div className="home-section3-text1">Innovation at KeepitDefi</div>
          <div className="home-section3-text2">Meet Our Team</div>
          <div className="home-section3-text3">
            Meet the amazing team behind the growth and innovation of KeepItDefi
          </div>

          <div className="staffs">
            <div className="staff1">
              <div className="home-section3-text4">@PholyBaker</div>
              <div className="home-section3-text5">Founder</div>
            </div>
            <div className="staff2">
              <div className="home-section3-text4">@Iziwa</div>
              <div className="home-section3-text5">Community Manager</div>
            </div>
            <div className="staff3">
              <div className="home-section3-text4">@Lulu</div>
              <div className="home-section3-text5">Community Manager</div>
            </div>
            <div className="staff4">
              <div className="home-section3-text4">@Ivanaliku</div>
              <div className="home-section3-text5">Content Manager</div>
            </div>
            <div className="staff5">
              <div className="home-section3-text4">@Hon.Afo</div>
              <div className="home-section3-text5">Community Manager</div>
            </div>
            <div className="staff6">
              <div className="home-section3-text4">@josh_Ade</div>
              <div className="home-section3-text5">Software Dev</div>
            </div>
          </div>
        </section>
        <section className="home-section4">
          <div className="home-section4-text1">What We Do</div>
          <div className="home-section4-text2">
            Creating a borderless Decentralized Finance Community for everyone
          </div>
          <div className="home-section4-text3">
            We do our due diligence by thoroughly reviewing projects before
            sharing with our community We share and discuss vetted DeFi projects
            from trusted Devs,who care about long term growth and the security
            of investor funds on the blockchain, regardless of who they are or
            where they come from.
          </div>
        </section>
        <section className="home-section5">
          <div className="card-proj1">
            <div className="home-section5-text1">HFuel Refinery Calculator</div>
            <div className="home-section5-text2">
              <a href="/hfuel-home" target="_blank" style={{ color: "white" }}>
                LINK TO HFUEL CALCULATOR
              </a>
            </div>
          </div>
          <div className="card-proj2">
            <div className="home-section5-text1">HNW Price Bot</div>
            <div className="home-section5-text2">
              <a
                href=" https://t.me/KeepitDefi_HNW_Price_update"
                target="_blank"
                style={{ color: "white" }}
              >
                LINK TO HFUEL PRICEBOT
              </a>
            </div>
          </div>
          <div className="card-proj3">
            <div className="home-section5-text1">Stake Bot</div>
            <div className="home-section5-text2">Coming Soon</div>
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
                <a
                  href="https://twitter.com/keepitdefi?t=yuQQKMLiHCzhjmWL-tjptA&s=09"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  <img src="./images/twitter.svg" className="sc" alt="ref" />
                </a>
              </div>
              <div className="home-section6-box">
                <div className="home-section6-text3">
                  <a
                    href="https://twitter.com/keepitdefi?t=yuQQKMLiHCzhjmWL-tjptA&s=09"
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                    rel="noreferrer"
                  >
                    KiD Twitter
                  </a>
                </div>
                <div className="home-section6-text4">
                  We tweet harmoniously like birds. Never miss an update from us
                  on Twitter
                </div>
              </div>
            </div>
            <div className="home-section6-inner">
              <div>
                <a
                  href="https://t.me/keepitdefi"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  <img src="./images/telegram.svg" className="sc" alt="ref" />
                </a>
              </div>
              <div className="home-section6-box">
                <div className="home-section6-text3">
                  <a
                    href="https://t.me/keepitdefi"
                    target="_blank"
                    style={{ color: "white", cursor: "pointer" }}
                    rel="noreferrer"
                  >
                    KiD Telegram
                  </a>
                </div>
                <div className="home-section6-text4">
                  Engage and participate in interesting conversations.
                  Learn,connect and grow with us
                </div>
              </div>
            </div>
            <div className="home-section6-inner">
              <div>
                <a
                  href="https://t.me/keepitdefi"
                  target="_blank"
                  style={{ color: "white", cursor: "pointer" }}
                  rel="noreferrer"
                >
                  <img src="./images/telegram.svg" className="sc" alt="ref" />
                </a>
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
