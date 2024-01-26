import {
  json,
  MetaFunction,
  type LinksFunction,
  type LoaderFunctionArgs,
  ActionFunctionArgs,
} from "@remix-run/node";
import homeStyles from "../styles/dist/main.css";
import MainNavStyles from "../styles/dist/MainNavigation.css";
import landingStyles from "../styles/dist/Landing.css";
import LandingPage from "~/components/Landing";
import moduleStyles from "../styles/dist/Modules.css";
import bannerStyles from "../styles/dist/Banner.css";
import keyFeaturesStyles from "../styles/dist/KeyFeatures.css";
import contactFormStyles from "../styles/dist/ContactForm.css";

export const meta: MetaFunction = () => {
  return [
    { title: 'Web3Firewall' },
    { name: 'description', content: 'Web3Firewall' },
  ]
}

export async function action({ request, context }: ActionFunctionArgs) {
  const body = await request.formData();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const investorInterest = {
    message: body.get("message"),
    url: body.get("url"),
    organization: body.get("organization"),
    phoneNumber: body.get("phoneNumber"),
    email: body.get("email"),
    name: body.get("name"),
    organizationTitle: body.get("organizationTitle"),
  };

//   if (
//     await sendToSlack(
//       context,
//       `Joining the waiting list:
// Organization: \`${investorInterest.organization}\`
// Organization Website: \`${investorInterest.url}\`
// Contact: \`${investorInterest.name}\`
// Title: \`${investorInterest.organizationTitle}\`
// Email: \`${investorInterest.email}\`
// Phone Number: \`${investorInterest.phoneNumber}\`
// Organization: \`${investorInterest.organization}\`
// Message: \`${investorInterest.message}\``
//     )
//   ) {
//     console.log("Success!");
//     return json({ message: "succeeded" });
//   }

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
