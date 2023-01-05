interface BoardData {name:string, elements:JSX.Element[]};

const Board = ({ name, elements }: BoardData) => (
  <section className="mt-12">
    <div className="font-semibold text-3xl mb-6">{name}</div>
    <div >
      {elements}
    </div>
  </section>
);

export default Board;
