const educations = [
  { name: 'Rocketseat', time: '2022 - Atualmente', text: 'Discover' },
];

const createEducation = ({ name, time, text }) => {
  const li = document.createElement('li');
  const pName = document.createElement('p');
  const pTime = document.createElement('p');
  const pText = document.createElement('p');

  pName.classList.add('education-name');
  pTime.classList.add('education-time');
  pText.classList.add('education-text');

  pName.textContent = name;
  pTime.textContent = time;
  pText.textContent = text;

  li.append(pName, pTime, pText);
  return li;
};

const putEducation = ()=> {
  const education = document.querySelector('.education');
  educations.forEach(ed=> {
    const educationElement = createEducation(ed);
    education.appendChild(educationElement);
  })
}

export default putEducation;