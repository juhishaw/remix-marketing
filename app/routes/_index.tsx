import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import homeStyles from "../styles/dist/main.css";
import MainNavStyles from "../styles/dist/MainNavigation.css";
import landingStyles from "../styles/dist/Landing.css";
import LandingPage from "~/components/Landing";
import moduleStyles from "../styles/dist/Modules.css";
import bannerStyles from "../styles/dist/Banner.css";
import keyFeaturesStyles from "../styles/dist/KeyFeatures.css";
import contactFormStyles from "../styles/dist/ContactForm.css";

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

export default function Index() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: homeStyles },
    { rel: "stylesheet", href: MainNavStyles },
    { rel: "stylesheet", href: landingStyles },
    { rel: "stylesheet", href: moduleStyles },
    { rel: "stylesheet", href: bannerStyles },
    { rel: "stylesheet", href: keyFeaturesStyles },
    { rel: "stylesheet", href: contactFormStyles },
  ];
};
