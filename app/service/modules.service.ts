enum CardStyle {
  Blue = "blue",
  Orange = "orange",
  Red = "red",
}

interface Card {
  name: string;
  icon: string;
  summary: string;
  style: CardStyle;
  isFlip: boolean;
  flipTxt: string[];
}

const cardData: Card[] = [
  {
    name: "Governance",
    icon: "icon-governance",
    summary: "Work smarter, not harder",
    style: CardStyle.Blue,
    isFlip: false,
    flipTxt: [
      "Streamline workflows and processes for faster compliance and risk management.",
      "Generate audit-ready documentation.",
      "Increase accountability and collaboration with committee approval.",
      "Ensure policy enforcement and prevent unauthorized modifications with cryptographic signatures.",
    ],
  },
  {
    name: "Risk",
    icon: "icon-risk",
    summary: "Minimize risk and ensure security",
    style: CardStyle.Orange,
    isFlip: false,
    flipTxt: [
      "AI-powered detection adapts to evolving threats and minimizes false positives, reducing unnecessary effort and disruptions.",
      "Operators can tailor detection parameters to their specific needs and risk tolerance",
      "Identify and address potential risks in real time before they cause harm, minimizing the impact on users and business operations.",
      "Minimize the risk of data breaches and unauthorized access to sensitive information with Web3Firewall’s privacy-safe data ingestion.",
    ],
  },
  {
    name: "compliance",
    icon: "icon-compliance",
    summary: "Reduce compliance costs and complexity",
    style: CardStyle.Red,
    isFlip: false,
    flipTxt: [
      "Tailor policies to specific jurisdictions, avoiding unnecessary restrictions and streamlining compliance processes",
      "Quickly adapt to regulatory changes with readily customizable policies.",
      "Customize lists to minimize the inconvenience of legitimate transactions being blocked.",
      "Gain a real-time overview of your compliance status and identify potential issues.",
    ],
  },
];

export default cardData;
