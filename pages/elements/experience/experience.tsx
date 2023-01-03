export type ExperienceData = {company: string, job_title: string, date: string, responsibility: string}

const Experience = ({ experience }: {experience: ExperienceData}) => (
  <div className="mb-4">
    <p className="font-semibold text-lg">
      {experience.company+' - '+experience.job_title}
    </p>
    <p className="font-semibold">{experience.date}</p>
    <p >{experience.responsibility}</p>
  </div>
);

export default Experience;
