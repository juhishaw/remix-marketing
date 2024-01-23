import { useEffect, useState } from "react";
import ModuleStyles from "../styles/dist/Modules.css";

export default function ModuleSection({
  isFlip,
  text,
}) {
  const module = [
    {
      name: "Governance",
      icon: "icon-governance",
      summary: "Work smarter, not harder",
      style: "blue",
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
      style: "orange",
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
      style: "red",
      isFlip: false,
      flipTxt: [
        "Tailor policies to specific jurisdictions, avoiding unnecessary restrictions and streamlining compliance processes",
        "Quickly adapt to regulatory changes with readily customizable policies.",
        "Customize lists to minimize the inconvenience of legitimate transactions being blocked.",
        "Gain a real-time overview of your compliance status and identify potential issues.",
      ],
    },
  ];
  const [data, setData] = useState(module);

  useEffect(() => {
    module.map((item, index) => {
      if(item.name === text) {
        item.isFlip = !item.isFlip
        setData([...module]);
      }
    })
  }, [isFlip]);

  return (
    <ul className="modules-wrapper xl:container xl:mx-auto grid grid-cols-3">
      {data.map(({ name, icon, summary, style, flipTxt, isFlip}, index) => (
        <li key={index} className={style + " flip-card" + (isFlip ? ' flip' : ' ')}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="content">
                <div className="icon-wrapper flex items-center justify-center">
                  <div className={icon + " icon " + style}></div>
                </div>
                <h6 className="title">{name}</h6>
                <h4 className="caption text-wrap">{summary}</h4>
                <button className="line-btn">Learn more</button>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <h6 className="title">{name}</h6>
                <ul>
                  {flipTxt.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="txt">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: ModuleStyles }];
}
