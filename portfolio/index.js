import Profile from './components/Profile/index.js';
import putContact from './components/Contact/index.js';
import putTecnology from './components/Tecnology/index.js';
import putXp from './components/Experience/index.js';
import putEducation from './components/Education/index.js';
import putProjects from './components/Projects/index.js';

(() => {
  const changeMenuIcon = (icon) => {
    const isBurger = icon.classList.contains('fa-bars');
    let classToRemove = 'fa-bars';
    let classToAdd = 'fa-xmark';
    if (!isBurger) {
      classToRemove = 'fa-xmark';
      classToAdd = 'fa-bars';
    }
    icon.classList.remove(classToRemove);
    icon.classList.add(classToAdd);
  };

  const addMobileMenuEvent = () => {
    const menuBtn = document.querySelector('.menu');
    const icon = menuBtn.querySelector('i');
    const main = document.querySelector('main');
    menuBtn.addEventListener('click', () => {
      const aside = document.querySelector('aside');
      changeMenuIcon(icon);
      menuBtn.classList.toggle('open');
      main.classList.toggle('shrink');
      aside.classList.toggle('open');
    });
  };

  const start = async () => {
    const profileContent = await Profile.getProfileContent('gabriellima77');
    Profile.putProfileContent(profileContent);
    putContact(profileContent);
    putTecnology();
    putXp();
    putEducation();
    const repos = profileContent.repos_url;
    putProjects(repos);
    addMobileMenuEvent();
  };

  start();
})();
