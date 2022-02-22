import Profile from './components/Profile/index.js';
import putContact from './components/Contact/index.js';
import putTecnology from './components/Tecnology/index.js';
import putXp from './components/Experience/index.js';
import putEducation from './components/Education/index.js';



const start = async () => {
  const profileContent = await Profile.getProfileContent('gabriellima77');
  Profile.putProfileContent(profileContent);
  putContact(profileContent);
  putTecnology();
  putXp();
  putEducation();
};

start();
