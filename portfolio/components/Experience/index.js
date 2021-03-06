const experiences = [{ name: 'Calang.io', time: '2021 - Atualmente' }];

const createXP = ({ name, time }) => {
  const li = document.createElement('li');
  const pName = document.createElement('p');
  const pTime = document.createElement('p');

  li.classList.add('xp');
  pName.classList.add('xp-name');
  pTime.classList.add('xp-time');

  pName.textContent = name;
  pTime.textContent = time;

  li.append(pName, pTime);
  return li;
};

const putXp = () => {
  const experience = document.querySelector('.list-xp');
  experiences.forEach((xp) => {
    const xpElement = createXP(xp);
    experience.appendChild(xpElement);
  });
};

export default putXp;
