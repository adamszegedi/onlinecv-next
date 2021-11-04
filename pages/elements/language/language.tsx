import Circle from './circle';


const getScore = (language) => [...Array(5)].map(
  (value, index) => {
    const filled = index <= language.skill;
    const key = (new Date().getTime()) * index;
    return <Circle filled={filled} key={key} />;
  },
);

const Language = ({ language }) => (
  <div className="language-container">
    <div className="language-name">
      {language.name}
    </div>
    <div className="circle-wrapper">
      {getScore(language)}
    </div>
  </div>
);

export default Language;
