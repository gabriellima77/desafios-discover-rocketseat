const tecnologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'React-Native',
  'TypeScript',
  'Next.js',
  'Node.js',
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
  const tecnology = document.querySelector('.tecnology');
  tecnologies.forEach((tec) => {
    const tag = createTag(tec);
    tecnology.appendChild(tag);
  });
};

export default putTecnology;
