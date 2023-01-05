import Skill from './skill';

const SkillList = ({ listOfSkills }: {listOfSkills:string[]}) => (
  <section className='mt-12'>
    <p className='font-semibold text-3xl'>Technologies</p>
    <ul className='list-none flex flex-wrap gap-2 font-semibold mt-6 text-base'>
      {listOfSkills.map((skill) => <Skill text={skill} key={skill} />)}
    </ul>
  </section>
);

export default SkillList;
