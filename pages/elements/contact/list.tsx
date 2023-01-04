import Contact,{ ContactData } from './contact';

const ContactList = ({ listOfContacts }: {listOfContacts: ContactData[]}) => {
  const elements = listOfContacts.map((value: ContactData) => <Contact contact={value} key={value.data} />);
  return <div className='font-semibold flex flex-col text-lg basis-2/4 mb-2 lg:m-auto'>
          {elements}
        </div>;
  };

export default ContactList;
