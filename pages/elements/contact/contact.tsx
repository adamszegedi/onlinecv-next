export interface ContactData {data:string, text?: string, type:string, rel?: string, src?: string};
import Image from 'next/image';

const Contact = ({ contact }: {contact: ContactData}): JSX.Element => {
  let linkElement: JSX.Element = <></>;
  let href;
  switch (contact.type) {
    case 'web':
      linkElement = (
        <a href={contact.data} rel={contact.rel}>
          <div className="button-layout button-contact-layout shadow">
            <Image alt="web" src={contact.src!} height="20" width='20' />
            {contact.text}
          </div>
        </a>
      );
      break;
      case 'phone':
        href = `tel:${contact.data}`;
        linkElement = (
          <a href={href}>
          <div className="button-layout button-contact-layout shadow">
          <Image alt="phone" src="/call_white_24dp.svg" height="20" width='20' />
            {contact.data}
          </div>
        </a>
      );
      break;
      case 'mail':
        href = `mailto:${contact.data}`;
        linkElement = (
          <a href={href}>
          <div className="button-layout button-contact-layout shadow">
            <Image alt="mail" src="/email_white_24dp.svg" height="20" width='20' />
            {contact.data}
          </div>
        </a>
      );
      break;
    default:
      break;
  }
  return linkElement;
};

function getContactElement(type: 'web'|'phone'|'mail'){

}

export default Contact;
