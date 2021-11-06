import '../styles/cv.css';
import Head from 'next/head';
import Header from './elements/header';
import People from './data/cv_data.json';
import ContactList from './elements/contact/list';
import SkillList from './elements/skills/list';
import LanguageList from './elements/language/list';
import EducationList from './elements/education/list';
import ExperienceList from './elements/experience/list';
import profilePic from './data/profile_pic.jpg'

const {name, short_bio, contact, skills, languages, school, work} = People.people;

const src="/profile_pic.jpg"


export default function Cv() {
  return (
    <>
    <Head>
        <title>{name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={name} key="ogtitle" />
        <meta property="og:description" content={short_bio} key="ogdesc" />
        <meta property="og:image" content={profilePic.src} key="ogimage" />
        <meta name="twitter:card" content={short_bio} />
        <meta name="description" content={short_bio} />
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