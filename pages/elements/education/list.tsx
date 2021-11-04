import Education from './education';
import Board from '../board';

const EducationList = ({ listOfEducation }) => (
  <Board
    name="Educations"
    className="content-school"
    elements={listOfEducation.map(
      (education) => <Education education={education} key={education.school} />,
    )}
  />
);

export default EducationList;
