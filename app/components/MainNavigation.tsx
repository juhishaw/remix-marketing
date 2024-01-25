import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((show) => !show);
  }

  return (
    <nav>
      <div className="logo-wrapper">
        <NavLink to="/">
          <div className="logo bg-no-repeat bg-cover"></div>
        </NavLink>
      </div>
      <div className="nav-list-wrapper">
        <ul className="nav-list">
          <li className="nav-link-list">
            <NavLink className="nav-link-item" to="/partnership">
              Partnership
            </NavLink>
          </li>
          <li className="nav-link-list">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full py-2 px-3  md:p-0 md:w-auto"
            >
              Company
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdownNavbar"
              className="hidden bg-white font-normalrounded-lg shadow w-44"
            >
              <ul
                className="sub-nav-list-wrapper"
                aria-labelledby="dropdownLargeButton"
              >
                <li className="sub-nav-list">
                  <NavLink className="sub-nav-link-items" to="/aboutUs">
                    About Us
                  </NavLink>
                </li>
                <li className="sub-nav-list">
                  <NavLink className="sub-nav-link-items" to="/career">
                    Career
                  </NavLink>
                </li>
                <li className="sub-nav-list">
                  <NavLink className="sub-nav-link-items" to="/security">
                    Security
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="nav-btn-wrapper">
        <button className="ghost-btn">
          <Link to="/contact">Request a Demo</Link>
        </button>
      </div>
      <div className="expand-btn" data-btn-open onClick={handleToggle}>
        <i className="icon-hamburger"></i>
      </div>
      {isOpen && (
        <div className="expanded-nav-list">
          <div className="cross" onClick={handleToggle}>
            <span className="icon-close"></span>
          </div>
          <ul className="nav-list-sm">
            <li>
              {" "}
              <NavLink className="nav-link-item" to="/partnership">
                Partnership
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="sub-nav-link-items" to="/aboutUs">
                About Us
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="sub-nav-link-items" to="/career">
                Career
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="sub-nav-link-items" to="/security">
                Security
              </NavLink>
            </li>
          </ul>
          <div className="nav-btn-wrapper">
            <button className="ghost-btn">
              <Link to="/contact">Request a Demo</Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MainNavigation;
