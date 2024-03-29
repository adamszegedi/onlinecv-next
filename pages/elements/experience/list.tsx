import Experience, { ExperienceData } from './experience';
import Board from '../board';

const ExperienceList = ({ listOfExperience }: { listOfExperience: ExperienceData[] }) => (
    <Board
        name="Experience"
        className="print-top-padding-m"

        elements={listOfExperience.map(
            (experience) => <Experience experience={experience} key={experience.company} />,
        )}
    />
);

export default ExperienceList;
