import { Form, Link, useNavigation } from "@remix-run/react";

interface ContactFormProps {
  text: string;
}

export default function ContactForm({ text }: ContactFormProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form className="form-wrapper" method="post" id="contact-form">
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
          <label htmlFor="organizationTitle">Title</label>
          <span className="icon icon-title"></span>
          <input
            type="text"
            id="organizationTitle"
            name="organizationTitle"
            placeholder="Head of Compliance"
            required
          />
        </p>
        <p className="form-group">
          <label htmlFor="email">Corporate Email</label>
          <span className="icon icon-email"></span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jdoe@example.com"
            required
          />
        </p>
        <p className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <span className="icon icon-phone"></span>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+1 987.654.3210"
            required
          />
        </p>
        <p className="form-group">
          <label htmlFor="organization">Company Name</label>
          <span className="icon icon-company-name"></span>
          <input
            type="text"
            id="organization"
            name="organization"
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
        <div className="form-actions">
          <button
            className="full-btn py-4 px-6 text-base font-normal"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Please wait..." : text}
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
    </>
  );
}