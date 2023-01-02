export type ExperienceData = {company: string, job_title: string, date: string, responsibility: string}

const Experience = ({ experience }: {experience: ExperienceData}) => (
  <div >
    <div >
      {experience.company}
      {' '}
      -
      {' '}
      {experience.job_title}
    </div>
    <div >{experience.date}</div>
    <div >{experience.responsibility}</div>
  </div>
);

export default Experience;
