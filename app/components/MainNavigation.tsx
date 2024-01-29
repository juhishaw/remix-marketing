import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";

interface CloseDropDownPros {
  closeDropdown: () => void;
}

const Logo = () => (
  <div className="logo-wrapper">
    <NavLink to="/">
      <div className="logo bg-no-repeat bg-cover"></div>
    </NavLink>
  </div>
);

const NavList = ({ closeDropdown }: CloseDropDownPros) => (
  <div className="nav-list-wrapper">
    <ul className="nav-list">
      <li className="nav-link-list">
        <NavLink
          className="nav-link-item"
          to="/partnership"
          onClick={closeDropdown}
        >
          Partnership
        </NavLink>
      </li>
      <li className="nav-link-list">
        <Dropdown closeDropdown={closeDropdown} />
      </li>
    </ul>
  </div>
);

const Dropdown = ({ closeDropdown }: CloseDropDownPros) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeAndToggle = () => {
    setDropdownVisible(false);
    closeDropdown();
  };

  return (
    <div>
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="flex items-center justify-between w-full py-2 px-3  md:p-0 md:w-auto"
        onClick={isDropdownVisible ? closeAndToggle : toggleDropdown}
      >
        Company
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
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

      {isDropdownVisible && (
        <div
          id="dropdownNavbar"
          className="bg-white font-normal rounded-lg shadow w-44"
        >
          <ul
            className="sub-nav-list-wrapper"
            aria-labelledby="dropdownLargeButton"
          >
            <li className="sub-nav-list">
              <NavLink
                className="sub-nav-link-items"
                to="/aboutUs"
                onClick={closeAndToggle}
              >
                About Us
              </NavLink>
            </li>
            <li className="sub-nav-list">
              <NavLink
                className="sub-nav-link-items"
                to="/career"
                onClick={closeAndToggle}
              >
                Career
              </NavLink>
            </li>
            <li className="sub-nav-list">
              <NavLink
                className="sub-nav-link-items"
                to="/security"
                onClick={closeAndToggle}
              >
                Security
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const NavButton = () => (
  <div className="nav-btn-wrapper">
    <button className="ghost-btn">
      <Link to="/contact">Request a Demo</Link>
    </button>
  </div>
);

interface ExpandButtonProps {
  handleToggle: () => void;
}

const ExpandButton = ({ handleToggle }: ExpandButtonProps) => (
  <div className="expand-btn" data-btn-open onClick={handleToggle}>
    <i className="icon-hamburger"></i>
  </div>
);

const ExpandedNavList = ({ handleToggle }: ExpandButtonProps) => (
  <div className="expanded-nav-list">
    <div className="cross" onClick={handleToggle}>
      <span className="icon-close"></span>
    </div>
    <ul className="nav-list-sm">
      <li>
        <NavLink className="nav-link-item" to="/partnership">
          Partnership
        </NavLink>
      </li>
      <li>
        <NavLink className="sub-nav-link-items" to="/aboutUs">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink className="sub-nav-link-items" to="/career">
          Career
        </NavLink>
      </li>
      <li>
        <NavLink className="sub-nav-link-items" to="/security">
          Security
        </NavLink>
      </li>
    </ul>
    <NavButton />
  </div>
);

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <Logo />
      <NavList closeDropdown={closeDropdown} />
      <NavButton />
      <ExpandButton handleToggle={handleToggle} />
      {isOpen && <ExpandedNavList handleToggle={handleToggle} />}
    </nav>
  );
};

export default MainNavigation;
