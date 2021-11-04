import Contact from './contact';
import Board from '../board';

const ContactList = ({ listOfContacts }) => {
  const elements = listOfContacts.map((value) => <Contact contact={value} key={value.data} />);
  return <Board name="Contact" className="content-contact" elements={elements} />;
};

export default ContactList;
