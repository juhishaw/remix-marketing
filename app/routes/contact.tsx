import { Form, Link, MetaFunction, json, useNavigation } from "@remix-run/react";
import RequestADemoStyles from "../styles/dist/RequestADemo.css";

export async function action({ request }) {
  const formData = await request.formData();
  const investorInterest = Object.fromEntries(
    [
      "message",
      "url",
      "organization",
      "phoneNumber",
      "email",
      "name",
      "organizationTitle",
      "social",
    ].map((field) => [field, formData.get(field)])
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return json({ message: "success" });
}

export default function ContactPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
    <div className="contact-page-wrapper">
      <div className="center-container grid grid-cols-2 gap-4 xl:container xl:mx-auto">
        <div className="left">
          <h2>Transact with Confidence and Compliance with Web3Firewall AI</h2>
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
              {[
                {
                  label: "Your Full Name",
                  name: "name",
                  placeholder: "Jane Doe",
                  icon: "icon-user",
                },
                {
                  label: "Title",
                  name: "organizationTitle",
                  placeholder: "Head of Compliance",
                  icon: "icon-title",
                },
              ].map((field) => (
                <p className="form-group" key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <span className={`icon ${field.icon}`}></span>
                  <input
                    type="text"
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                  />
                </p>
              ))}
            </div>
            <div className="group">
              {[
                {
                  label: "Corporate Email",
                  name: "email",
                  placeholder: "jdoe@example.com",
                  icon: "icon-email",
                },
                {
                  label: "Phone number",
                  name: "phoneNumber",
                  placeholder: "+1 987.654.3210",
                  icon: "icon-phone",
                },
              ].map((field) => (
                <p className="form-group" key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <span className={`icon ${field.icon}`}></span>
                  <input
                    type={field.name === "email" ? "email" : "text"}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                  />
                </p>
              ))}
            </div>
            <div className="group">
              {[
                {
                  label: "Company Name",
                  name: "organization",
                  placeholder: "Example Inc",
                  icon: "icon-company-name",
                },
                {
                  label: "Company URL",
                  name: "url",
                  placeholder: "https://www.example.co/",
                  icon: "icon-url",
                },
              ].map((field) => (
                <p className="form-group" key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <span className={`icon ${field.icon}`}></span>
                  <input
                    type="text"
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                  />
                </p>
              ))}
            </div>
            <div className="group">
              <p className="form-group">
                <label htmlFor="social">How did you hear about us?</label>
                <textarea
                  id="social"
                  name="social"
                  className="social-txtarea"
                  rows={2}
                  placeholder="E.g Google search"
                  required
                />
              </p>
            </div>
            <div className="group">
              <p className="form-group">
                <label htmlFor="message">Please tell us how we can help</label>
                <textarea
                  id="message"
                  name="message"
                  className="msg-txtarea"
                  rows={5}
                  placeholder="Write your message here"
                  required
                />
              </p>
            </div>
            <div className="form-actions">
              <button
                className="full-btn py-4 px-6 text-base font-normal"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Please wait..." : "Request a demo"}
              </button>
            </div>
            <p className="privacy-wrapper">
              By submitting this form, I agree to the{" "}
              <span className="privacy-txt scale-animate">
                <span className="text">
                  <Link to="/privacy-policy">privacy policy</Link>
                </span>
              </span>
              .
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: RequestADemoStyles }];
}

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - Web3Firewall" },
    {
      name: "description",
      content:
        "Get in touch with Web3Firewall. Request a demo and learn how we can help you transact with confidence and compliance in Web3.",
    },
  ];
};
