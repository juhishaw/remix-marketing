import { Link, MetaFunction } from "@remix-run/react";
import careerStyles from "../styles/dist/Career.css";

export default function CareerPage() {
  return (
    <div className="career-wrapper grid grid-cols-2 gap-4 md:container md:mx-auto">
      <div className="left-group">
        <h1>
          Careers at
          <span className="grad">Web3Firewall</span>
        </h1>
        <h3 className="summary">
          We are looking for innovative individuals to join our team.
        </h3>
        <div className="button-wrapper-career">
          <Link
            to="https://apply.workable.com/web3firewall/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-14 text-base font-normal full-btn"
          >
            Browse Full-time Openings
            <span className="icon-arrow-right"></span>
          </Link>
          <div className="txt-btn scale-animate">
            <div className="grad-txt">
              <Link
                to="https://apply.workable.com/web3firewall/"
                target="_blank"
              >
                Browse Internships
              </Link>
            </div>
            <div className="icon-arrow-right"></div>
          </div>
        </div>
      </div>
      <div className="bg-no-repeat bg-contain banner"></div>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: careerStyles }];
}

export const meta: MetaFunction = () => {
  return [
    { title: "Careers at Web3Firewall" },
    {
      name: "description",
      content:
        "Join our team! Explore full-time openings and internships at Web3Firewall.",
    },
  ];
};
