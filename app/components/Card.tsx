const Card = ({ name, icon, summary, style, isFlip, flipTxt, handleFlip }) => (
  <li className={style + " flip-card" + (isFlip ? " flip" : " ")}>
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
);

export default Card;
