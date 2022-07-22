import React from "react";
import Header from "../components/Header";

export default function Disclaimer() {
  return (
    <div>
      <Header />
      <main>
        <section className="privacy-section1">
          <div className="privacy-section1-text1">DISCLAIMER</div>

          <div className="privacy-section1-text2">
            NO FINANCIAL/INVESTMENT ADVICE
          </div>
          <div className="privacy-section1-text4">
            The information provided in our community, either written or spoken
            about in or AMAs does not constitute investment advice, financial
            advice, trading advice, or any sort of advice and you should not
            treat any of the community’s content as such. Although we may
            recommend some projects which are based on personal research by
            individuals in the community, these recommendations should be
            considered the opinions of the writer, host, guests, and/or sponsors
            of the said project. The contents we share are for information,
            education, and entertainment purposes only. We suggest that you do
            your own research/due diligence on the project and consult with your
            financial advisor before making any investment decision.
          </div>
          <div className="privacy-section1-text2">ACCURACY OF INFORMATION</div>
          <div className="privacy-section1-text4">
            The KeepitDeFi team will strive to ensure accuracy of the
            information we share with our community, however we are not
            responsible for any missing or incorrect information. You should
            endeavour to conduct further research on the official community of
            the said project.
          </div>
          <div className="privacy-section1-text2">EARNINGS DISCLAIMER</div>
          <div className="privacy-section1-text4">
            Whilst every effort has been made to vet every DeFi project - their
            potential and sustainability, there is no guarantee that you will
            earn any money by investing in these projects. Predictions, either
            in written form or spoken about in our AMAs, cannot be interpreted
            as a promise or guarantee of earnings as we are not taking the
            listener or reader’s personal circumstances into consideration when
            making recommendations. Earning potential is entirely dependent on
            the person investing in the said project, their ideas, and the
            techniques employed. We do not purport this as a “get rich scheme”
            and any claims made of actual earnings or examples of actual results
            can be verified on the Blockchain. Your level of success in
            attaining the results claimed in any of our materials depends on the
            time you devote to the project, your understanding of its ecosystem,
            use of the ideas and techniques mentioned, your finances, knowledge,
            time of entry and exit and various skills. These factors differ for
            each individual so we cannot guarantee your success or income level
            in any of the said projects nor are we responsible for any of your
            actions. All price forecasts are mere predictions and cannot be
            represented as certainty.
          </div>
          <div className="privacy-section1-text2">AFFILIATE DISCLOSURE</div>
          <div className="privacy-section1-text4">
            When you use our referral/affiliate links, KeepitDeFi will receive
            referral commissions at no extra cost to you. For example, if you
            join our team wallet on any DeFi project, we may receive referral
            rewards for your action. The payment comes from the team reward
            system of the protocol, not directly from you. This commission may
            be in the form of money or services and could exist without any
            action from a site visitor or community member. These rewards keep
            KeepitDeFi running and allow us to do random airdrops and giveaways
            in the community. It also keeps us going.
          </div>
        </section>
      </main>
    </div>
  );
}
