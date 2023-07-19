interface BoardData { name: string, className?: string, elements: JSX.Element[] };

const Board = ({ name, elements, className }: BoardData) => (
    <section className={`mt-12 ${className}`}>
        <div className="font-semibold text-3xl mb-6">{name}</div>
        <div >
            {elements}
        </div>
    </section>
);

export default Board;
