export interface ContactData {data:string, text?: string, type:string, rel?: string, src?: string, print?: string};
import { FaLinkedin } from 'react-icons/fa';
import { FaMastodon } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GrDocumentMissing } from 'react-icons/gr'
import { IconType } from 'react-icons/lib';
import React from 'react';

type contactType = 'mail'|'phone'|'linkedin'|'mastodon'|'twitter';

const contactIcons = new Map<contactType, IconType>([
  ["mail", FiMail],
  ["mastodon", FaMastodon],
  ["linkedin", FaLinkedin],
  ["phone", FaPhone],
  ["twitter", FaTwitter]
]);


const changePrintText: contactType[] = ['linkedin', 'mastodon', 'twitter']


const Contact = ({ contact }: {contact: ContactData}): JSX.Element => {
  const contactType = contact.type as contactType;
  const icon: IconType = (contactIcons.get(contactType) ? contactIcons.get(contact.type as contactType): GrDocumentMissing)!;
  const printText = changePrintText.includes(contactType) && contact.print ? ` ${contact.print}`: '';
  return <div className='mb-6 content-baseline pl-4'>
    <a href={contact.data} rel={contact.rel} className={"flex items-center "}>
        {React.createElement(icon)}
        <p className={'pl-1'.concat(printText ? ' print-vanish': '')}>
        {
        (contact.text ? contact.text: contact.data)
        }
        </p>
        <p className='ml-2 print-appear' style={{display: "none"}}>{printText}</p>
    </a>
  </div>
  ;
};

export default Contact;
