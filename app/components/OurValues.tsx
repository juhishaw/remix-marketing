import ValueItem from "./ValueItem";

export default function OurValuesSection() {
  const values = [
    {
      name: "Respect",
      icon: "icon-respect",
      summary:
        "Our commitment is to respect our clients, industry partners, and one another. With trust as the bedrock, we show respect through open communication, transparency, and empathy, ensuring every interaction fuels success for our clients, partners, and team.",
    },
    {
      name: "Integrity",
      icon: "icon-integrity",
      summary:
        "Integrity is the bedrock of our operations. We act with unwavering ethics, ensuring that our actions reflect the highest standards of moral and professional conduct. We operate transparently, building trust with our clients, partners, and the Web3 community.",
    },
    {
      name: "Innovation",
      icon: "icon-innovation",
      summary:
        "We thrive on innovation, constantly pushing the boundaries of cybersecurity to stay one step ahead of emerging threats in the ever-evolving Web3 landscape. Through cutting-edge technology and creative problem-solving, we deliver solutions that anticipate and address the security challenges of tomorrow.",
    },
    {
      name: "Customer-centricity",
      icon: "icon-customer-centricity",
      summary: `Customer-centricity is the basis for our customer-defined value-led selling in the customer's language and obsessing about earning and growing customer trust.`,
    },
    {
      name: "Craftsmanship",
      icon: "icon-craftsmanship",
      summary:
        "Our dedication to craftsmanship is evident in the meticulous design and implementation of our security solutions. We believe that every line of code, every encryption layer, and every security protocol should be a testament to our commitment to excellence.",
    },
  ];
  return (
    <div className="our-values-wrapper">
      <div className="center-container xl:container xl:mx-auto">
        <h1>Our Values</h1>
        <div className="h3-wrapper">
        <h3>
          At Web3Firewall, we are on a relentless mission to safeguard the
          future of Web3 by upholding the core values of respect, innovation,
          craftsmanship, integrity, and customer-centricity.
        </h3>
        </div>
        <div className="value-listing">
          <ul className="">
            {values.map((item, index) => (
               <ValueItem key={index}  {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
