import '../styles/cv.css';
import Head from 'next/head';
import Header from './elements/header';
import People from './data/cv_data.json';
import ContactList from './elements/contact/list';
import SkillList from './elements/skills/list';
import LanguageList from './elements/language/list';
import EducationList from './elements/education/list';
import ExperienceList from './elements/experience/list';

const {name, short_bio, contact, skills, languages, school, work} = People.people;
const src="/profile_pic.jpg"

export default function Cv() {
  return (
    <>
    <Head>
        <title>Social Media Preview</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={name} />
        <meta name="twitter:card" content={short_bio} />
        <meta
          property="og:description"
          content={short_bio}
        />
        <meta property="og:image" content={src} />
        </Head>
      <div>
        <Header name={name} bio={short_bio} src={src}/>
        <div className="grid-content">
          <ContactList listOfContacts={contact} />
          <SkillList listOfSkills={skills} />
          <LanguageList listOfLanguage={languages} />
          <EducationList listOfEducation={school} />
          <ExperienceList listOfExperience={work} />
        </div>
      </div>
    </>
  );
}