import Image from 'next/image';
import profilePic from '../data/profile_pic.jpg'
import ContactList from './contact/list';
import { ContactData } from './contact/contact';

interface HeaderData {"name":string, "bio":string, "src": string, "contacts": ContactData[]};

export default function Header({ name, bio, src, contacts }: HeaderData) {
  return (
    <>
        <header className='flex flex-wrap'>
          <picture className='basis-1/4 rounded-full min-w-fit m-auto mb-2'>
            <Image
            src={profilePic}
            alt="Adam Szegedi"
            style={{objectFit:"contain", width: "150px", height: "auto", borderRadius: "9999px", margin: "auto"}}
            />
            <h1 className='font-bold text-4xl mt-2'>
              {name}
            </h1>
          </picture>
          <ContactList listOfContacts={contacts}/>
        </header>
      <section className='text-lg mt-2 text-slate-500 dark:text-slate-400'>{bio}</section>
    </>
  );
}
