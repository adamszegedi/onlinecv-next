import Image from 'next/image';
import profilePic from '../data/profile_pic.jpg'
import ContactList from './contact/list';
import { ContactData } from './contact/contact';
import PrintButton from './buttons/print';

interface HeaderData {"name":string, "bio":string, "src": string, "contacts": ContactData[]};

export default function Header({ name, bio, src, contacts }: HeaderData) {
  return (
    <>
        <header className='flex flex-wrap mb-2 relative'>
          <div className='basis-1/4 min-w-fit mx-auto flex items-center mb-12 md:mb-0'>
            <picture className='rounded-full'>
              <Image
              src={profilePic}
              alt="Adam Szegedi"
              style={{objectFit:"contain", width: "150px", height: "auto", borderRadius: "9999px", margin: "auto"}}
              />
              <h1 className='font-bold text-4xl mt-2'>
                {name}
              </h1>
            </picture>
          </div>
          <ContactList listOfContacts={contacts}/>
          <PrintButton/>
        </header>
      <section className='text-lg text-slate-500 dark:text-slate-400'>{bio}</section>
    </>
  );
}
