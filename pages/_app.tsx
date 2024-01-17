import '../styles/cv.css';
import Head from 'next/head';
import Header from './elements/header';
import People from './data/cv_data.json';
import SkillList from './elements/skills/list';
import LanguageList from './elements/language/list';
import EducationList from './elements/education/list';
import ExperienceList from './elements/experience/list';
import profilePic from './data/profile_pic.jpg'

const { name, twittertag, short_bio, contacts, skills, languages, school, work } = People.people;

const src = "/profile_pic.jpg"


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
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1e293b" />
                <meta name="twitter:card" content='summary' key="twittercard" />
                <meta name="twitter:creator" content={twittertag} key="twittercreator" />
                <meta name="twitter:description" content={short_bio} key="twitterdesc" />
                <meta name="description" content={short_bio} />
            </Head>
            <div className='w-full h-full dark:bg-slate-800 dark:text-white'>

                <div className='md:w-full xl:w-2/3 m-auto p-5 max-w-3xl'>
                    <Header name={name} bio={short_bio} src={src} contacts={contacts} />
                    <SkillList listOfSkills={skills} />
                    <div className='flex flex-row page-break'>
                        <div className='basis-1/2'>
                            <LanguageList listOfLanguage={languages} />
                        </div>
                        <div className='basis-1/2'>
                            <EducationList listOfEducation={school} />
                        </div>
                    </div>
                    <ExperienceList listOfExperience={work} />
                </div>
            </div>
        </>
    );
}
