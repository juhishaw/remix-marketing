import { NavLink } from "@remix-run/react";

interface FooterLinkProps {
  to: string;
  text: string;
}

const FooterLink = ({ to, text }: FooterLinkProps) => (
  <li className="nav-item normal-txt-20 scale-animate">
    <NavLink to={to}>{text}</NavLink>
  </li>
);

export default FooterLink;
