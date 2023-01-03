import Skill from './skill';

const SkillList = ({ listOfSkills }: {listOfSkills:string[]}) => (
  <ul className='list-none flex flex-wrap gap-2'>
    {listOfSkills.map((skill) => <Skill text={skill} key={skill} />)}
  </ul>
);

export default SkillList;
