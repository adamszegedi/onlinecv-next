export interface EducationData {school: string, title: string, date:string};

const Education = ({ education }: {education: EducationData}) => (
  <div >
    <div >{education.school}</div>
    <div >{education.title}</div>
    <div >{education.date}</div>
  </div>
);

export default Education;
