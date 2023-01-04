import Skill from './skill';

const SkillList = ({ listOfSkills }: {listOfSkills:string[]}) => (
  <section className='mt-10'>
    <p className='font-semibold text-3xl'>Technologies</p>
    <ul className='list-none flex flex-wrap gap-2 text-lg font-semibold mt-6'>
      {listOfSkills.map((skill) => <Skill text={skill} key={skill} />)}
    </ul>
  </section>
);

export default SkillList;
