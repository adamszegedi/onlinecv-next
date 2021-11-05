export interface EducationData {school: string, title: string, date:string};

const Education = ({ education }: {education: EducationData}) => (
  <div className="wrapper-block">
    <div className="title-format">{education.school}</div>
    <div className="text-format">{education.title}</div>
    <div className="date-format">{education.date}</div>
  </div>
);

export default Education;
