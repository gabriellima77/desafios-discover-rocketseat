const keys = [
  'name',
  'description',
  'html_url',
  'stargazers_count',
  'forks_count',
  'language',
];
let isActive = false;

const showMore = () => {
  const show = document.querySelector('.show-more');
  const projects = document.querySelector('.projects');

  show.addEventListener('click', () => {
    isActive = !isActive;
    const children = [...projects.children];
    children.forEach((child, i) => {
      if (isActive && i > 2) {
        child.classList.add('visible');
      }
      if (!isActive && i > 2) {
        child.classList.remove('visible');
      }
    });
  });
};

const filterProjectKeys = (content) => {
  const filteredContent = {};
  keys.forEach((key) => {
    const hasProperty = content.hasOwnProperty(key);
    if (hasProperty) filteredContent[key] = content[key];
  });
  return filteredContent;
};

const getProjects = async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  const projects = data.map((datum) => filterProjectKeys(datum));
  return projects;
};

const getInfoWithIcon = ({ content, type }) => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');
  if (type === 'star') {
    img.src = './assets/star.svg';
    img.alt = 'stars';
  } else {
    img.src = './assets/git-branch.svg';
    img.alt = 'forks';
  }
  p.textContent = content.value;
  div.append(img, p);
  return div;
};

const getLanguage = ({ language }) => {
  const lang = document.createElement('p');
  lang.textContent = language;
  lang.classList.add('language');

  return lang;
};

const createProject = (content, index) => {
  const anchor = document.createElement('a');
  const article = document.createElement('article');
  const folderImg = document.createElement('img');
  const header = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const footer = document.createElement('div');

  const types = [
    { content: { value: content.stargazers_count }, type: 'star' },
    { content: { value: content.forks_count }, type: 'fork' },
  ];

  types.forEach((type) => footer.appendChild(getInfoWithIcon(type)));

  anchor.href = content.html_url;
  anchor.setAttribute('target', '_blank');
  h3.textContent = content.name;
  p.textContent = content.description;
  folderImg.src = './assets/folder.svg';

  article.classList.add('card', 'project');
  header.classList.add('project-header');
  footer.classList.add('project-footer');

  if (index < 2) anchor.classList.add('visible');

  header.append(folderImg, h3);
  footer.appendChild(getLanguage(content));
  article.append(header, p, footer);
  anchor.appendChild(article);
  return anchor;
};

const putProjects = async (url) => {
  const projects = await getProjects(url);
  const projectsElement = document.querySelector('.projects');
  projects.forEach((project, i) => {
    projectsElement.appendChild(createProject(project, i));
  });
  showMore();
};

export default putProjects;
