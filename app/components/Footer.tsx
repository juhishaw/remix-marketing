import { Link } from "@remix-run/react";
import SocialLink from "./SocialLink";
import FooterLink from "./FooterLink";

export default function FooterSection() {
  return (
    <footer className="footer xl:container xl:mx-auto">
      <div className="links-grp grid grid-cols-2 gap-4">
        <div className="block">
          <h1>Join the waiting list today.</h1>
          <h6 className="sm-txt-16 mail-section">
            <i className="icon grad-txt icon-email"></i>
            <div className="grad-txt">sales&#64;web3firewall.xyz</div>
          </h6>
          <div className="icon-grp">
            <SocialLink
              href="https://www.linkedin.com/company/web3firewall/"
              iconClass="icon-lkdn"
            />
            <SocialLink
              href="https://twitter.com/?lang=en"
              iconClass="icon-twitter"
            />
          </div>
        </div>
        <div className="right">
          <div className="wrapper grid grid-cols-2 gap-4">
            <div className="block">
              <ul className="nav flex-column">
                <FooterLink to="/" text="Home" />
                <FooterLink to="/partnership" text="Partnerships" />
                <FooterLink to="/aboutUs" text="About Us" />
              </ul>
            </div>

            <div className="block">
              <ul className="nav flex-column">
                <FooterLink to="/career" text="Career" />
                <FooterLink to="/security" text="Security" />
              </ul>
            </div>
          </div>

          <div className="footer-button-wrapper">
            <button
              type="button"
              className="py-4 px-6 text-base font-bold ghost-btn"
            >
              <Link to="/contact">Request a Demo</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="group justify-center">
        <div className="left">
          <span>© 2024 Web3Firewall, Inc</span>
          <span>All Rights Reserved</span>
          <span className="pointer scale-animate">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
