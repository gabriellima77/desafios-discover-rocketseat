const createContact = ({ alt, icon, text, url }) => {
  const contact = document.createElement('div');
  const contanctIcon = document.createElement('img');
  const contactText = document.createElement('p');

  contanctIcon.src = icon + '.svg';
  contanctIcon.classList.add('contact-icon');
  contanctIcon.textContent = alt;
  contanctIcon.alt = alt;

  contactText.textContent = text;
  contactText.classList.add('contact-text');

  contact.appendChild(contanctIcon);
  if (url) {
    const link = document.createElement('a');
    link.href = url;
    link.appendChild(contactText);
    contact.appendChild(link);
  } else contact.appendChild(contactText);

  return contact;
};

const putContact = (profileContent) => {
  const contactElement = document.querySelector('.contact');
  const path = './assets/';
  const contacts = {
    location: { icon: path + 'map-pin', alt: 'Localização' },
    company: { icon: path + 'briefcase', alt: 'Empresa' },
    login: {
      icon: path + 'github',
      alt: 'login',
      url: profileContent.html_url,
    },
    twitter_username: { icon: path + 'twitter', alt: 'twitter' },
    email: { icon: path + 'mail', alt: 'email' },
  };

  for (let key in contacts) {
    const hasProperty = profileContent[key];
    if (hasProperty) {
      contacts[key].text = profileContent[key];
      const contact = createContact(contacts[key]);
      contactElement.appendChild(contact);
    }
  }
};

export default putContact;
