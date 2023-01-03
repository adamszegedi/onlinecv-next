export interface EducationData {school: string, title: string, date:string};

const Education = ({ education }: {education: EducationData}) => (
  <div className="mb-4">
    <p className="font-semibold">{education.title}</p>
    <p className="font-normal">{education.school}</p>
    <p className="font-light">{education.date}</p>
  </div>
);

export default Education;
