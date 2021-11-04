import Experience from './experience';
import Board from '../board';

const ExperienceList = ({ listOfExperience }) => (
  <Board
    name="Experience"
    className="content-work"
    elements={listOfExperience.map(
      (experience) => <Experience experience={experience} key={experience.company} />,
    )}
  />
);

export default ExperienceList;
