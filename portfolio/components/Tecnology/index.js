const tecnologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'React Native',
  'TypeScript',
  'NextJs',
  'NodeJs',
  'Git',
  'Python',
  'Figma',
];

const createTag = (text) => {
  const tag = document.createElement('div');
  tag.classList.add('tag');
  tag.textContent = text;
  return tag;
};

const putTecnology = () => {
  const tags = document.querySelector('.tags');
  tecnologies.forEach((tec) => {
    const tag = createTag(tec);
    tags.appendChild(tag);
  });
};

export default putTecnology;
