interface ValueItem {
  name: string;
  icon: string;
  summary: string;
}

const ValueItem = ({ name, icon, summary }: ValueItem) => (
  <li className="value-listing-items common-listing-items-blue animate pop">
    <div className="right flex flex-col items-start">
      <div className="blue-icon-wrapper">
        <div className={`${icon} icon`}></div>
      </div>
      <div className="group">
        <h4 className="title">{name}</h4>
        <h6 className="summary">{summary}</h6>
      </div>
    </div>
  </li>
);

export default ValueItem;
