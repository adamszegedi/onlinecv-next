export interface ContactData {data:string, text?: string, type:string, rel?: string, src?: string};
import { FaLinkedin } from 'react-icons/fa';
import { FaMastodon } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GrDocumentMissing } from 'react-icons/gr'
import { IconType } from 'react-icons/lib';
import React from 'react';

type contactType = 'mail'|'phone'|'linkedin'|'mastodon';
const contactIcons = new Map<contactType, IconType>([
  ["mail", FiMail],
  ["mastodon", FaMastodon],
  ["linkedin", FaLinkedin],
  ["phone", FaPhone],
]);

const Contact = ({ contact }: {contact: ContactData}): JSX.Element => {
  const icon: IconType = (contactIcons.get(contact.type as contactType) ? contactIcons.get(contact.type as contactType): GrDocumentMissing)!;
  return <>
    <a href={contact.data} rel={contact.rel} className="flex items-center">
        {React.createElement(icon)}
        <p className='pl-1'>
        {contact.text ? contact.text: contact.data}
        </p>
    </a>
  </>
  ;
};

export default Contact;
