import Language, { LanguageData } from './language';
import Board from '../board';

const LanguageList = ({ listOfLanguage }: {listOfLanguage: LanguageData[]}) => {
  const elements = listOfLanguage.map((value) => <Language language={value} key={value.name} />);
  return <Board name="Languages" className="content-language" elements={elements} />;
};

export default LanguageList;
