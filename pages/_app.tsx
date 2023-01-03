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
import { ContactData } from './elements/contact/contact';

const {name, twittertag, short_bio, contact, skills, languages, school, work} = People.people;

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
        <meta name="theme-color" content="#546e7a" />
        <meta name="twitter:card" content='summary' key="twittercard" />
        <meta name="twitter:creator" content={twittertag} key="twittercreator" />
        <meta name="twitter:description" content={short_bio} key="twitterdesc" />
        <meta name="description" content={short_bio} />
        </Head>
      <div className='w-4/5 m-auto p-5'>
        <Header name={name} bio={short_bio} src={src}/>
        <ContactList listOfContacts={contact} />
        <SkillList listOfSkills={skills} />
        <LanguageList listOfLanguage={languages} />
        <EducationList listOfEducation={school}/>
        <ExperienceList listOfExperience={work} />
    </div>
    </>
  );
}