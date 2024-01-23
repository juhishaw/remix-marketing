import { LinksFunction } from "@remix-run/node";
import securityStyles from "../styles/dist/Security.css";

export default function SecurityPage() {
  const security = [
    {
      name: "Platform and Network Security",
      icon: "icon-platofrom-security",
      summary:
        "Infrastructure security is fundamental to Web3Firewall. We use our Virtual Private Cloud (VPC) to isolate our production systems from development and internal networks logically. Strict network rules are configured to limit inbound and outbound access to only what is necessary for the Web3Firewall service to operate.",
    },
    {
      name: "Availability",
      icon: "icon-product-security",
      summary:
        "Web3Firewall adheres to our service level agreements (SLAs) of 99.5% availability. Our Master Service Agreement contains additional information about our SLAs.",
    },
    {
      name: "Personnel Security",
      icon: "icon-personnel-security",
      summary: `Web3Firewall ensures all employees are well informed and up to date on the latest security best practices. All employees are required to complete bi-yearly security and compliance training, that is based on their individual roles and general security information. Any employees who fail to complete the training cannot access Web3Firewall corporate systems.
            All Web3Firewall employees undergo background screenings before joining the organization.`,
    },
    {
      name: "Product Security",
      icon: "icon-product-security",
      summary:
        "At Web3Firewall, we take product security very seriously. We embed security principles into our products from the start of our software development lifecycle. We use general Agile methodologies to develop products and ensure security throughout the Agile release cycle. This helps us to identify and fix vulnerabilities faster than if we followed longer release cycles. We have clear and effective change management policies and procedures that govern when and how changes take place. This philosophy is essential to DevOps security, and the development approaches enabling Web3Firewall adoption.",
    },
    {
      name: "Patch Management",
      icon: "icon-patch-management",
      summary:
        "Web3FirewallDatadog releases software patches as part of our continuous integration process. We strive to ensure patches that can impact end users are applied as soon as possible and within our established service level agreements (SLA) by sending end-userend user notifications and scheduling service windows",
    },
    {
      name: "Physical Security",
      icon: "icon-physical-security",
      summary:
        "As a SaaS provider, Web3Firewall production infrastructure is hosted in cloud service provider (CSP) environments. These CSPs manage physical and environmental security controls for Web3FirewallDatadog production servers, including buildings, locks, and door keys.",
    },
    {
      name: "Access Management",
      icon: "icon-access",
      summary: `Access at Web3Firewall follows the principles of least privilege. No employees have standing access to production assets or sensitive information. When access is needed for an employee to perform their job functions, employees request access for the period of time necessary to perform their duties. Sensitive access requests require signoff from multiple people within our organization. Web3Firewall third parties do not have access to production systems ornor any sensitive data.
            We require all employees to use passwordless technologies with an additional strong multi-factor authentication, using biometrics and/or pin codes with 8 or more alpha-numeric digits. Employees must use multi-factor authentication along with strong passwords for systems that don't support passwordless authentication.
            Web3Fireall monitors and logs access to all production environments. Access logs are audited and reviewed regularly in accordance with our security and compliance policies.`,
    },
    {
      name: "Protection of Customer Data",
      icon: "icon-customer-data-protection",
      summary: `Data submitted to the Web3Firewall service by authorized users is classified as confidential. This data is protected in transit across public and internal networks and is encrypted at rest. Customer data remains within our production environment at all times, with the only exception being when customers request access to their data.
            All data transmitted between Web3Firewall and our users is protected using Transport Layer Security (TLS) and HTTP Strict Transport Security (HSTS). If encrypted communication is interrupted, the Web3Firewall application is inaccessible.
            For sensitive financial data, Web3Firewall encrypts the data using Fully Homomorphic Encryption (FHE) so that the sensitive information is never accessible to Web3Firewall systems.`,
    },
    {
      name: "Monitoring",
      icon: "icon-monitor",
      summary: `Web3Firewall monitors critical infrastructure for security-related events by using open-source and commercial technologies. Activity data such as API calls and operating system-level calls are logged to a central logging solution, where the information is correlated, labeled, and run through custom rules to identify malicious and unapproved activity. When such activity is detected, the actions are fed into our Security Orchestration, Automation, and Response (SOAR) platform, where automated actions are triggered to respond to the events. Additionally, alerts are sent to our incident response team to investigate and handle as appropriate.`,
    },
  ];
  return (
    <div className="security-wrapper">
      <div className="banner">
        <div className="left-group">
          <h1>Security</h1>
          <h4 className="summary text-wrap">
            Security at Web3Firewall is managed using a layered approach that
            reflects our commitment to protecting our customers and their
            sensitive data. We have created a shared responsibility model that
            outlines the controls we’ve inherited from our cloud service
            providers (CSPs) and the security responsibility Web3Firewall has
            for our customers.
          </h4>
        </div>
      </div>
      <ul className="security-listing md:container md:mx-auto">
        {security.map((item, index) => (
          <li
            key={index}
            className="listing-items common-listing-items-blue animate glow"
          >
            <div className="blue-icon-wrapper">
              <div className={item.icon + " icon"}></div>
            </div>
            <div className="info-wrapper">
              <h1>{item.name}</h1>
              <h6>{item.summary}</h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: securityStyles }];
};
