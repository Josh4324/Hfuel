import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div>
      <Header />
      <main>
        <section className="blog-section1">
          <div className="blog-section1-text1">Recent Articles</div>

          <div className="blog-list">
            <div className="blogitem">
              <div>
                <img src="./images/blog1.png" className="blogimg" alt="blog" />
              </div>
              <div className="blog-time">
                <div className="blog-section1-text2">5 min Read</div>
                <div className="blog-section1-text2">22,Jun 2022</div>
              </div>
              <div className="blog-section1-text3">Staking Basics</div>
              <div className="blog-section1-text4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                nulla et a posuere. Nunc tempus pulvinar ullamcorper tortor
              </div>
            </div>
            <div className="blogitem">
              <div>
                <img src="./images/proto.png" className="blogimg" alt="blog" />
              </div>
              <div className="blog-time">
                <div className="blog-section1-text2">5 min Read</div>
                <div className="blog-section1-text2">22,Jun 2022</div>
              </div>
              <div className="blog-section1-text3">
                What are Web 3 Protocols
              </div>
              <div className="blog-section1-text4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                nulla et a posuere. Nunc tempus pulvinar ullamcorper tortor
              </div>
            </div>
            <div className="blogitem">
              <div>
                <img src="./images/blog2.png" className="blogimg" alt="blog" />
              </div>
              <div className="blog-time">
                <div className="blog-section1-text2">5 min Read</div>
                <div className="blog-section1-text2">22,Jun 2022</div>
              </div>
              <div className="blog-section1-text3">
                Beginners Guide to Blockhain
              </div>
              <div className="blog-section1-text4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                nulla et a posuere. Nunc tempus pulvinar ullamcorper tortor
              </div>
            </div>
          </div>
        </section>
        <section className="blog-section1">
          <div className="blog-section1-text1">Most Popular Articles</div>

          <div className="blog-list">
            <div className="blogitem">
              <div>
                <img src="./images/pop1.png" className="blogimg" alt="blog" />
              </div>
              <div className="blog-time">
                <div className="blog-section1-text2">5 min Read</div>
                <div className="blog-section1-text2">22,Jun 2022</div>
              </div>
              <div className="blog-section1-text3">
                Smart contracts Vulnerabilities
              </div>
              <div className="blog-section1-text4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                nulla et a posuere. Nunc tempus pulvinar ullamcorper tortor
              </div>
            </div>
            <div className="blogitem">
              <div>
                <img src="./images/pop2.png" className="blogimg" alt="blog" />
              </div>
              <div className="blog-time">
                <div className="blog-section1-text2">5 min Read</div>
                <div className="blog-section1-text2">22,Jun 2022</div>
              </div>
              <div className="blog-section1-text3">NFT trading For newbies</div>
              <div className="blog-section1-text4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                nulla et a posuere. Nunc tempus pulvinar ullamcorper tortor
              </div>
            </div>
            <div className="blogitem">
              <div>
                <img src="./images/pop3.png" className="blogimg" alt="blog" />
              </div>
              <div className="blog-time">
                <div className="blog-section1-text2">5 min Read</div>
                <div className="blog-section1-text2">22,Jun 2022</div>
              </div>
              <div className="blog-section1-text3">
                How transactions Are recorded on the blcokchain
              </div>
              <div className="blog-section1-text4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
                nulla et a posuere. Nunc tempus pulvinar ullamcorper tortor
              </div>
            </div>
          </div>
        </section>

        <section className="blog-section2">
          <div className="blog-section2-text1">Latest AMAs Episodes</div>
          <div className="audio-list">
            <div className="blog-secbox">
              <div className="blog-box">
                <div className="blog-section2-text1">
                  {" "}
                  # DeFi Newbie Series 1
                </div>
              </div>
              <div className="blog-section2-text3">
                21st, Jun 2022{" "}
                <img src="./images/point.svg" className="" alt="ref" />
              </div>
            </div>
            <div className="blog-secbox">
              <div className="blog-box">
                <div className="blog-section2-text1">
                  {" "}
                  # BankX project with Rowan
                </div>
              </div>
              <div className="blog-section2-text3">
                21st, Jun 2022{" "}
                <img src="./images/point.svg" className="" alt="ref" />
              </div>
            </div>
            <div className="blog-secbox">
              <div className="blog-box">
                <div className="blog-section2-text1">
                  {" "}
                  # What’s New ? Stake Protocol V 2.0
                </div>
              </div>
              <div className="blog-section2-text3">
                21st, Jun 2022{" "}
                <img src="./images/point.svg" className="" alt="ref" />
              </div>
            </div>
            <div className="blog-secbox">
              <div className="blog-box">
                <div className="blog-section2-text1">
                  {" "}
                  # DeFi Newbie Series 2
                </div>
              </div>
              <div className="blog-section2-text3">
                21st, Jun 2022{" "}
                <img src="./images/point.svg" className="" alt="ref" />
              </div>
            </div>
          </div>
        </section>

        <section className="blog-section2-page">
          <div className="page1">
            <div className="page-text1">Previous Page</div>
            <div>
              <button className="page-but">Next Page</button>
            </div>
          </div>
          <div className="page2">
            <div className="page-text2">Page</div>
            <div>
              <button className="page-but2">1</button>
            </div>
            <div className="page-text2">of 10</div>
          </div>
        </section>

        <section className="blog-section2-page2">
          <div className="page1">
            <div className="">
              <button className="page-but4">
                <img src="./images/parr.svg" alt="arr" />
              </button>
            </div>
            <div>
              <button className="page-but3">
                Next Page <img src="./images/parr2.svg" alt="arr" />
              </button>
            </div>
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
