export default function LeadershipSection() {
  const leadership = [
    {
      name: "Dr. Samer Fayssal",
      url: "https://www.linkedin.com/in/dr-fayssal-3a41b11b/",
      title: "CEO",
      summary:
        "20 years of domain experience. Hands-on executive in Cybersecurity and entrepreneur. CISO at Dfns, BitGo. PhD AI/ML applications.",
    },
    {
      name: "Matt Hardy",
      url: "https://www.linkedin.com/in/mdhardy1/",
      title: "COO/ CBO",
      summary: `20+ years experience across industry spaces, 5.5 years experience in Digital Asset space
            VP of Sol Eng at BitGo, VP of Sales Engineering at Qredo, Google, Booz Allen Hamilton.
            `,
    },
    {
      name: "Nizar Baki",
      url: "https://www.linkedin.com/in/nizar-baki-46b8881/",
      title: "CRO / CFO",
      summary:
        "30 years of business development, sales, financial leadership, and corporate management. Previously lead Azure launch at Microsoft.",
    },
    {
      name: "Cody Nicewanner",
      url: "https://www.linkedin.com/in/cody-nicewanner-aaaa984a/",
      title: "Head of Engineering and Security",
      summary:
        "Experienced leader and security engineer who has been in the cyber security industry for the past 18 years. Previously at Microsoft, UiPath, Anduril, and Dfns.",
    },
    {
      name: "Gavin Kip",
      url: "https://www.linkedin.com/in/guvenkip/",
      title: "Head of Product",
      summary:
        "Over 12 years of business and engineering experience. Served as a senior product manager at BitGo. Holds an MBA from the UC Berkeley and MS in Electrical Engineering from UCLA.",
    },
  ];
  return (
    <div className="leadership-wrapper">
      <div className="center-container xl:container xl:mx-auto">
        <h1>Leadership</h1>
        <ul className="leadership-grid">
          {leadership.map((item, index) => (
            <li key={index} className="listing-items">
              <div className="right flex flex-col items-start">
                <div className="general">
                  <div className="img"></div>
                  <div className="user-info">
                    <div className="group">
                      <h4 className="name">{item.name}</h4>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-lkdn"></span>
                      </a>
                    </div>
                    <div className="sepeartor"></div>
                    <h3 className="title">{item.title}</h3>
                  </div>
                </div>
                <h6 className="summary">{item.summary}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
