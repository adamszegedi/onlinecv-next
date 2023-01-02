interface BoardData {name:string, elements:JSX.Element[]};

const Board = ({ name, elements }: BoardData) => (
  <div>
    <div >{name}</div>
    <div >
      {elements}
    </div>
  </div>
);

export default Board;
