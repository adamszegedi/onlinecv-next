const Contact = ({ contact }) => {
  let linkElement;
  let href;
  switch (contact.type) {
    case 'web':
      linkElement = (
        <a href={contact.data}>
          <div className="button-layout button-contact-layout shadow">
            <svg className="change-my-color"><use xlinkHref="#svgweb" /></svg>
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
            <svg className="change-my-color"><use xlinkHref="#svgphone" /></svg>
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
            <svg className="change-my-color"><use xlinkHref="#svgmail" /></svg>
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

export default Contact;
