export default function KeyFeatures() {
  const features = [
    {
      name: "Know Your Transaction",
      icon: "icon-transaction",
      summary:
        "Our preventative solution utilizes a sophisticated blend of machine learning techniques to perform in-depth behavioral analysis of all of your transactions.",
    },
    {
      name: "Integration with any wallet",
      icon: "icon-integration",
      summary:
        "Keep all of your wallets compliant from a single location. No need to define the same policies across multiple providers.",
    },
    {
      name: "Comprehensive Fraud Detection",
      icon: "icon-fraud",
      summary:
        "Our proprietary technology simulates the future behavior of a transaction to minimize the risk and maximize compliance.",
    },
    {
      name: "Privacy-enhancing technology",
      icon: "icon-privacy",
      summary:
        "Our AI operates on encrypted data, ensuring your private data is never accessed outside of your network.",
    },
    {
      name: "Detailed Dashboard",
      icon: "icon-detail",
      summary:
        "Gain data-driven and actionable insights to drive the best compliance and risk management practices.",
    },
    {
      name: "Protection that evolves",
      icon: "icon-protection",
      summary:
        "Policies, backed by a proprietary AI engine, learn from and adapt to you, to offer tailored protection that improves over time.",
    },
    {
      name: "Customizable Policies",
      icon: "icon-policy",
      summary: `No-code policies are easy to configure and are flexible to meet your organization's unique needs.`,
    },
  ];
  return (
    <div className="key-features-wrapper">
      <h2>Key Features</h2>
      <ul className="key-feature-list grid grid-cols-2 gap-4 xl:container xl:mx-auto">
        {features.map((item, index) => (
          <li key={index} >
            <div className="icon-wrapper">
              <div className={item.icon + ' icon'} aria-label={item.name}></div>
            </div>
            <div className="right">
              <h4 className="title">{item.name}</h4>
              <h6 className="summary">{item.summary}</h6>
            </div>
          </li>
        ))}
      </ul>
      <div className="button-wrapper flex items-center justify-center w-100">
        <button className="py-4 px-6 text-base font-normal full-btn">
          Sign Up for Early Access
        </button>
      </div>
    </div>
  );
}
