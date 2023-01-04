export interface EducationData {school: string, title: string, date:string};

const Education = ({ education }: {education: EducationData}) => (
  <div className="mb-4">
    <p className="font-semibold">{education.title}</p>
    <p className="font-normal text-slate-500 dark:text-slate-400">{education.school}</p>
    <p className="font-light text-slate-500 dark:text-slate-400">{education.date}</p>
  </div>
);

export default Education;
