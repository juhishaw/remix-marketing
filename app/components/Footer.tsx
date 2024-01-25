import { Link, NavLink } from "@remix-run/react";

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
            <Link to="https://www.linkedin.com/company/web3firewall/">
              <span className="grad-txt icon-lkdn"></span>
            </Link>
            <Link to="https://twitter.com/?lang=en">
              <span className="grad-txt icon-twitter"></span>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="wrapper grid grid-cols-2 gap-4">
            <div className="block">
              <ul className="nav flex-column">
                <li className="nav-item normal-txt-20 scale-animate">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item normal-txt-20 scale-animate">
                  <NavLink to="/partnership">Partnerships</NavLink>
                </li>
                <li className="nav-item normal-txt-20 scale-animate">
                  <NavLink to="/aboutUs">About Us</NavLink>
                </li>
              </ul>
            </div>

            <div className="block">
              <ul className="nav flex-column">
                <li className="nav-item normal-txt-20 no-margin scale-animate">
                  <NavLink to="/career">Career</NavLink>
                </li>
                <li className="nav-item normal-txt-20 no-margin scale-animate">
                  <NavLink to="/security">Security</NavLink>
                </li>
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
          <span>© 2023 Web3Firewall, Inc</span>
          <span>All Rights Reserved</span>
          <span className="pointer scale-animate"> Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
