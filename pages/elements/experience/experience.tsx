const Experience = ({ experience }) => (
  <div className="wrapper-block">
    <div className="title-format">
      {experience.company}
      {' '}
      -
      {' '}
      {experience.job_title}
    </div>
    <div className="date-format">{experience.date}</div>
    <div className="text-format">{experience.responsibility}</div>
  </div>
);

export default Experience;
