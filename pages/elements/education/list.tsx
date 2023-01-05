import Education, {EducationData} from './education';
import Board from '../board';

const EducationList = ({ listOfEducation }: {listOfEducation: EducationData[]}) => (
  <Board
    name="Educations"
    
    elements={listOfEducation.map(
      (education) => <Education education={education} key={education.school} />,
    )}
  />
);

export default EducationList;
