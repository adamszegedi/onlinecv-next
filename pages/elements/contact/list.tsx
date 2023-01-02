import Contact,{ ContactData } from './contact';
import Board from '../board';

const ContactList = ({ listOfContacts }: {listOfContacts: ContactData[]}) => {
  const elements = listOfContacts.map((value: ContactData) => <Contact contact={value} key={value.data} />);
  return <Board name="Contact"  elements={elements} />;
};

export default ContactList;
