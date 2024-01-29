import { useState } from "react";
import landingStyles from "../styles/dist/Landing.css";
import moduleStyles from "../styles/dist/Modules.css";
import ContactForm from "./ContactForm";
import KeyFeatures from "./KeyFeatures";
// import ModuleSection from "./Modules";
import Logo from "./Logo";
import cardData from "~/service/modules.service";
import { Link } from "@remix-run/react";
import Card from "./Card";
import BannerWrapper from "./BannerWrapper";
// import ParticlesSection from "./Particle";

export default function LandingPage() {
  const [data, setData] = useState(cardData);

  const handleFlip = (text: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.name === text ? { ...item, isFlip: !item.isFlip } : item
      )
    );
  };

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
              <Link to="/contact">Sign Up for Early Access</Link>
            </button>
          </div>
        </div>
        <div className="bg-no-repeat bg-contain banner"></div>
      </div>
      <Logo />
      <div className="main-module-wrapper">
        <ul className="modules-wrapper xl:container xl:mx-auto grid grid-cols-3">
          {data.map((card, index) => (
            <Card key={index} {...card} handleFlip={handleFlip} />
          ))}
        </ul>
      </div>
      <BannerWrapper handleFlip={handleFlip} />
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
