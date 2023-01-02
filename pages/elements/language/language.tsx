export interface LanguageData {name: string, skill: number}


const getScore = (language: LanguageData) => [...Array(5)].map(
  (value, index) => {
    const star = (index < language.skill) ? "*": "";
    return star;
  },
);

const Language = ({ language }: {language: LanguageData}) => (
  <div >
    <div >
      {language.name}
    </div>
    <div className="w-24">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width: language.skill/5*100+'%'}}></div>
      </div>
    </div>
  </div>
);

export default Language;
