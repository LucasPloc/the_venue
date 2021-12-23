const CountdownItem = ({ time, tag }) => {
  return (
    <div className="countdown_item">
      <div className="countdown_time">{time}</div>
      <div className="countdown_tag">{tag}</div>
    </div>
  );
};

export default CountdownItem;
