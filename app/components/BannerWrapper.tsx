const BannerWrapper = ({ handleFlip }) => {
  const createLinkSpan = (text) => (
    <span className="link" onClick={() => handleFlip(text)}>
      {text.toLowerCase()}
    </span>
  );

  return (
    <div className="banner-wrraper">
      <h2 className="text">
        WebFirewall's {createLinkSpan("Governance")}, {createLinkSpan("Risk")},
        and {createLinkSpan("compliance")} capabilities seamlessly integrate
        with your existing workflows, empowering you to unleash innovation.
      </h2>
    </div>
  );
};

export default BannerWrapper;
