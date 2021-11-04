const Education = ({ education }) => (
  <div className="wrapper-block">
    <div className="title-format">{education.school}</div>
    <div className="text-format">{education.title}</div>
    <div className="date-format">{education.date}</div>
  </div>
);

export default Education;
