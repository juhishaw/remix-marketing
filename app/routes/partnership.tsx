import ContactForm from "~/components/ContactForm";
import contactFormStyles from "../styles/dist/ContactForm.css";
import { LinksFunction, json } from "@remix-run/node";
import partnershipStyles from "../styles/dist/Partnership.css";
import { MetaFunction } from "@remix-run/react";

export async function action({ request }) {
  const formData = await request.formData();
  const investorInterest = {
    message: formData.get("message"),
    url: formData.get("url"),
    organization: formData.get("organization"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    name: formData.get("name"),
    organizationTitle: formData.get("organizationTitle"),
  };

  return json({ message: "failed" });
}

export default function PartnershipPage() {
  return (
    <main>
      <div className="partnership-wrapper">
        <div className="banner grid grid-cols-2 gap-4">
          <div className="left-group">
            <h6>Web3Firewall Partner Network</h6>
            <h1>
              Web3Firewall is on a Mission to Eliminate Fraud in Digital
              Transactions
            </h1>
            <h3 className="summary">
              Join our growing list of partners to help companies eliminate
              fraud in their digital transactions through Governance, Risk
              Management and Compliance.
            </h3>
          </div>
          <div className="bg-no-repeat bg-contain partner-banner"></div>
        </div>
        <div className="contact-wrapper grid grid-cols-2 gap-4 xl:container xl:mx-auto">
          <div className="bg"></div>
          <div className="left">
            <h1>Ready to take back your time?</h1>
            <div className="summary">
              Join our Early Access Program today!
              <br />
              <br />
              We're building the most comprehensive and innovative platform to
              empower Web3 businesses to navigate risk with confidence. Be among
              the first to experience it and shape the future of compliance in
              this rapidly evolving space.
            </div>
            <div className="info-card">
              <span className="icon icon-email-1"></span>
              sales@web3firewall.xyz
            </div>
            <div className="info-card">
              <span className="icon icon-address"></span>San Francisco, CA
            </div>
            <div className="contanct-banner"></div>
          </div>
          <ContactForm text={"Become A Partner"} />
        </div>
      </div>
    </main>
  );
}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: contactFormStyles },
    { rel: "stylesheet", href: partnershipStyles },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Web3Firewall Partnership - Join Our Partner Network" },
    {
      name: "description",
      content:
        "Join the Web3Firewall Partner Network and help companies eliminate fraud in their digital transactions through Governance, Risk Management, and Compliance.",
    },
  ];
};

