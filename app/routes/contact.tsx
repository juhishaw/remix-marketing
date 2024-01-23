import { Form } from "@remix-run/react";
import RequestADemoStyles from "../styles/dist/RequestADemo.css";

export default function ContactPage() {
  const data = [
    "Know Your Transaction",
    "Comprehensive Fraud Detection",
    "Detailed Dashboard",
    "Customizable Policies",
    "Integration with Any Wallet",
    "Privacy-enhancing Technology",
    "Protection that Evolves",
  ];
  return (
    <>
      <div className="contact-page-wrapper">
        <div className="center-container grid grid-cols-2 gap-4 xl:container xl:mx-auto">
          <div className="left">
            <h2>
              Transact with Confidence and Compliance with Web3Firewall AI
            </h2>
            <ul className="conatct-list-wrapper">
              {data.map((item, index) => (
                <li key={index}>
                  <h4>{item}</h4>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <Form className="form-wrapper" method="post" id="note-form">
              <div className="group">
                <p className="form-group">
                  <label htmlFor="name">Your Full Name</label>
                  <span className="icon icon-user"></span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    required
                  />
                </p>
                <p className="form-group">
                  <label htmlFor="name">Title</label>
                  <span className="icon icon-title"></span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Head of Compliance"
                    required
                  />
                </p>
              </div>
              <div className="group">
                <p className="form-group">
                  <label htmlFor="email">Corporate Email</label>
                  <span className="icon icon-email"></span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Head of Compliance"
                    required
                  />
                </p>
                <p className="form-group">
                  <label htmlFor="number">Phone number</label>
                  <span className="icon icon-phone"></span>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="+1 9187.654.3210"
                    required
                  />
                </p>
              </div>
              <div className="group">
                <p className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <span className="icon icon-company-name"></span>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Example Inc"
                    required
                  />
                </p>
                <p className="form-group">
                  <label htmlFor="url">Company URL</label>
                  <span className="icon icon-url"></span>
                  <input
                    type="text"
                    id="url"
                    name="url"
                    placeholder="https://www.example.co/"
                    required
                  />
                </p>
              </div>
              <div className="group">
                <p className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Anything you want us to know. "
                    required
                  />
                </p>
              </div>
              <div className="form-actions">
                <button className="full-btn py-4 px-6 text-base font-normal">Request a demo</button>
              </div>
              <p className="privacy-wrapper">
                By submitting this form, I agree to the{" "}
                <span className="privacy-txt scale-animate">
                  <span className="text">privacy policy</span>
                </span>
                .
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: RequestADemoStyles }];
}
