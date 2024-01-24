import { useState } from "react";
import landingStyles from "../styles/dist/Landing.css";
import moduleStyles from "../styles/dist/Modules.css";
import ContactForm from "./ContactForm";
import KeyFeatures from "./KeyFeatures";
// import ModuleSection from "./Modules";
import Logo from "./Logo";
import cardData from "~/service/modules.service";
// import ParticlesSection from "./Particle";

export default function LandingPage() {
  const [isFlip, setIsFlip] = useState(false);
  const [data, setData] = useState(cardData);

  function handleFlip(text: string) {
    setIsFlip((flip) => !flip);

    cardData.map((item, index) => {
      if(item.name === text) {
        item.cardFlip = !item.cardFlip
      }
    })
    setData(cardData);
  }

  return (
    <>
      <div className="landing-wrapper grid grid-cols-2 gap-4 xl:container xl:mx-auto">
        <div className="main-bg"></div>
        {/* <ParticlesSection /> */}
        <div className="left-group">
          <h1>
            <span className="grad">Risk & Compliance AI</span> <br />
            for Web3
          </h1>
          <h3 className="summary xl:w-4/5">
            Stop Worrying About Fraud, Start Focusing on Growth: Web3Firewall AI
            is your 24/7 compliance, risk and governance bodyguard, protecting
            your business from evolving threats.
          </h3>
          <div className="button-wrapper">
            <button className="py-4 px-6 text-base font-normal full-btn">
              Sign Up for Early Access
            </button>
          </div>
        </div>
        <div className="bg-no-repeat bg-contain banner"></div>
      </div>
      <Logo />
      <div className="main-module-wrapper">
        <ul className="modules-wrapper xl:container xl:mx-auto grid grid-cols-3">
          {data.map(
            ({ name, icon, summary, style, flipTxt, cardFlip }, index) => (
              <li
                key={index}
                className={style + " flip-card" + (cardFlip ? " flip" : " ")}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="content">
                      <div className="icon-wrapper flex items-center justify-center">
                        <div className={icon + " icon " + style}></div>
                      </div>
                      <h6 className="title">{name}</h6>
                      <h4 className="caption text-wrap">{summary}</h4>
                      <button className="line-btn">Learn more</button>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="content">
                      <h6 className="title">{name}</h6>
                      <ul>
                        {flipTxt.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="txt">{item}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="banner-wrraper">
        <h2 className="text">
          WebFirewall's{" "}
          <span className="link" onClick={() => handleFlip("Governance")}>
            governance
          </span>
          ,{" "}
          <span className="link" onClick={() => handleFlip("Risk")}>
            risk
          </span>
          , and{" "}
          <span className="link" onClick={() => handleFlip("compliance")}>
            compliance{" "}
          </span>{" "}
          capabilities seamlessly integrate with your existing workflows,
          empowering you to unleash innovation.
        </h2>
      </div>
      <KeyFeatures />
      <div className="contact-wrapper grid grid-cols-2 gap-4 xl:container xl:mx-auto">
        <div className="bg"></div>
        <div className="left">
          <h1>Ready to take back your time?</h1>
          <h6 className="summary text-wrap">
            Join our Early Access Program today!
            <br />
            <br />
            We're building the most comprehensive and innovative platform to
            empower Web3 businesses to navigate risk with confidence. Be among
            the first to experience it and shape the future of compliance in
            this rapidly evolving space.
          </h6>
          <h6 className="info-card">
            <span className="icon icon-email-1"></span>
            sales@web3firewall.xyz
          </h6>
          <h6 className="info-card">
            <span className="icon icon-address"></span>San Francisco, CA
          </h6>
          <div className="contanct-banner"></div>
        </div>
        <ContactForm text={"Submit"} />
      </div>
    </>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: landingStyles },
    { rel: "stylesheet", href: moduleStyles },
  ];
}
