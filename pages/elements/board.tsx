const Board = ({ name, className, elements }) => (
  <div className={className}>
    <div className="strip">{name}</div>
    <div className="data-container">
      {elements}
    </div>
  </div>
);

export default Board;
