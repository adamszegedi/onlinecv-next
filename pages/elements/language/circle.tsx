const Circle = ({ filled }) => {
  const element = filled ? <div className="circle-inner" /> : null;
  return <div className="circle-outer">{element}</div>;
};

export default Circle;
