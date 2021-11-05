interface BoardData {name:string, className:string, elements:JSX.Element[]};

const Board = ({ name, className, elements }: BoardData) => (
  <div className={className}>
    <div className="strip">{name}</div>
    <div className="data-container">
      {elements}
    </div>
  </div>
);

export default Board;
