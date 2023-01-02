import Skill from './skill';

const SkillList = ({ listOfSkills }: {listOfSkills:string[]}) => (
  <ul className='list-disc'>
    {listOfSkills.map((skill) => <Skill text={skill} key={skill} />)}
  </ul>
);

export default SkillList;
