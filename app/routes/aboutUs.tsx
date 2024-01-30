import OurValuesSection from "~/components/OurValues";
import aboutUsStyles from "../styles/dist/Aboutus.css";
import LeadershipSection from "~/components/Leadership";
import JoinTeamSection from "~/components/JoinTeam";
import { MetaFunction } from "@remix-run/react";
export default function AboutUsPage() {
  return (
    <>
      <div className="about-us-wrapper">
        <div className="center-structure xl:container xl:mx-auto">
          <h3>Our Mission</h3>
          <h1>
            Empower every user and institution to transact with confidence and
            compliance in web3
          </h1>
          <div className="about-us-container grid grid-cols-2 gap-4 md:container md:mx-auto">
            <div className="bg-no-repeat bg-contain banner"></div>
            <div className="left-group">
              <div className="summary text-wrap">
                The heart of our mission beats with the dream of a truly
                empowered financial future. We believe Web3's promise of
                decentralization shouldn't come at the cost of trust and
                security. That's why we build governance, risk, and compliance
                software that empowers everyone, from individuals to
                institutions, to take control of their finances and transact
                with confidence. We see a future where Web3 isn't just about
                breaking free from old systems, but building a new one anchored
                in accountability, transparency, and accessibility. With our
                tools, users own their financial data, institutions navigate the
                new landscape with clarity, and together we forge a path towards
                a Web3 ecosystem where trust flourishes and everyone can
                transact with confidence.
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurValuesSection />
      <LeadershipSection />
      <JoinTeamSection />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: aboutUsStyles }];
}

export const meta: MetaFunction = () => {
  return [
    { title: "About Us - Web3Firewall" },
    {
      name: "description",
      content:
        "Learn about our mission, values, leadership, and how to join our team.",
    },
  ];
};
