import Skill from './skill';
import Board from '../board';

const SkillList = ({ listOfSkills }: {listOfSkills:string[]}) => (
  <Board
    name="Skill"
    className="content-skills"
    elements={listOfSkills.map((skill) => <Skill text={skill} key={skill} />)}
  />
);

export default SkillList;
